#!/usr/bin/env python3
import os
import sys
import time
import argparse
import requests
import re
import json
import datetime
from pathlib import Path

# Configuration
API_BASE_URL = "https://jules.googleapis.com/v1alpha"
ENV_FILE_PATH = Path(".env")
STATE_FILE_PATH = Path("state/sessions.json")

def log_session(component, session_id, title):
    """Logs session details to a JSON file."""
    entry = {
        "component": component,
        "sessionId": session_id,
        "title": title,
        "startTime": datetime.datetime.now().isoformat(),
        "status": "created"
    }
    
    data = []
    if STATE_FILE_PATH.exists():
        try:
            with open(STATE_FILE_PATH, "r") as f:
                content = f.read().strip()
                if content:
                    data = json.loads(content)
        except Exception as e:
            print(f"⚠️  Error reading state file: {e}")

    data.append(entry)
    
    try:
        with open(STATE_FILE_PATH, "w") as f:
            json.dump(data, f, indent=2)
    except Exception as e:
        print(f"⚠️  Error writing state file: {e}")

def load_api_keys():
    """Loads JULES_API_KEYS from .env file or system env."""
    val = os.environ.get("JULES_API_KEYS")
    
    if not val and ENV_FILE_PATH.exists():
        with open(ENV_FILE_PATH, "r") as f:
            for line in f:
                if "=" in line:
                     parts = line.strip().split("=", 1)
                     if parts[0].strip() == "JULES_API_KEYS":
                         val = parts[1].strip().strip('"').strip("'")
                         break
    
    if val:
        # Split by comma and clean up
        keys = [k.strip() for k in val.split(",") if k.strip()]
        return keys
    
    # Fallback to single key if plural not found
    single_val = os.environ.get("JULES_API_KEY")
    if not single_val and ENV_FILE_PATH.exists():
        with open(ENV_FILE_PATH, "r") as f:
            for line in f:
                if line.strip().startswith("JULES_API_KEY="):
                    single_val = line.strip().split("=", 1)[1].strip().strip('"').strip("'")
                    break
    
    if single_val:
        return [single_val]

    return []

def get_source_name(api_key, repo_name):
    """Fetches the Jules Source Name for a given GitHub repo."""
    headers = {"x-goog-api-key": api_key}
    print(f"🔍 Searching for source ID for repo: {repo_name}...")
    
    url = f"{API_BASE_URL}/sources"
    try:
        resp = requests.get(url, headers=headers)
        resp.raise_for_status()
        data = resp.json()
        
        for source in data.get("sources", []):
            gh_repo = source.get("githubRepo", {})
            full_name = f"{gh_repo.get('owner')}/{gh_repo.get('repo')}"
            if full_name.lower() == repo_name.lower():
                print(f"✅ Found Source ID: {source['name']}")
                return source['name']
        
        print(f"❌ Error: Repository '{repo_name}' not found in your connected Jules sources.")
        return None

    except requests.exceptions.RequestException as e:
        print(f"❌ API Error listing sources: {e}")
        return None

def create_session(api_key, source_name, prompt, component_name):
    """Creates a new Jules session."""
    headers = {
        "x-goog-api-key": api_key,
        "Content-Type": "application/json"
    }
    
    payload = {
        "prompt": prompt,
        "sourceContext": {
            "source": source_name,
            "githubRepoContext": { "startingBranch": "main" } 
        },
        "automationMode": "AUTO_CREATE_PR",
        "title": f"Refactor: {component_name}"
    }

    url = f"{API_BASE_URL}/sessions"
    
    try:
        resp = requests.post(url, headers=headers, json=payload)
        resp.raise_for_status()
        data = resp.json()
        print(f"🚀 Session Created! ID: {data.get('name')} | Title: {data.get('title')}")
        
        # Log session
        log_session(component_name, data.get('name'), data.get('title'))
        
        return data
    except requests.exceptions.RequestException as e:
        print(f"❌ Error creating session for {component_name}: {e}")
        return None

def main():
    parser = argparse.ArgumentParser(description="Jules Swarm Launcher (Rest API)")
    parser.add_argument("-t", "--type", required=True, help="Type of component to refactor (atoms, molecules, organisms, or custom)")
    parser.add_argument("-n", "--concurrency", type=int, default=5, help="Batch size (mock concurrency via sleep)")
    parser.add_argument("--repo", default="yuichiinumaru/ivisa-tamagui", help="GitHub repository name (owner/repo)")
    
    args = parser.parse_args()

    # 1. Load Keys
    api_keys = load_api_keys()
    if not api_keys:
        print("❌ Error: JULES_API_KEYS (or JULES_API_KEY) not found in .env or environment.")
        sys.exit(1)
    
    print(f"🔑 Loaded {len(api_keys)} API Keys.")

    # 2. Get Source ID (Using the first key)
    source_name = get_source_name(api_keys[0], args.repo)
    if not source_name:
        sys.exit(1)

    # 3. Load Paths
    tasks_file = Path(f"tasks/{args.type}.txt")
    prompt_file = Path(f"prompts/{args.type}_prompt.md")
    
    # Fallback for phase files if not found but base type exists
    if not prompt_file.exists() and "_" in args.type:
        base_type = args.type.split("_")[0]
        fallback_prompt = Path(f"prompts/{base_type}_prompt.md")
        if fallback_prompt.exists():
             print(f"⚠️  Prompt file for '{args.type}' not found, using base prompt '{fallback_prompt}'")
             prompt_file = fallback_prompt

    if not tasks_file.exists():
        print(f"❌ Error: Task list not found at {tasks_file}")
        sys.exit(1)
    
    if not prompt_file.exists():
        print(f"❌ Error: Prompt template not found at {prompt_file}")
        sys.exit(1)

    template_content = prompt_file.read_text(encoding="utf-8")

    # 4. Process Tasks
    with open(tasks_file, "r") as f:
        components = [line.strip() for line in f if line.strip()]

    print(f"📋 Found {len(components)} components to process.")
    print(f"ℹ️  Batch Size: {args.concurrency}")
    
    active_count = 0
    
    for i, component in enumerate(components):
        # Round Robin Key Selection
        current_key = api_keys[i % len(api_keys)]
        key_idx = i % len(api_keys)
        
        print(f"[{i+1}/{len(components)}] Processing: {component} (Key #{key_idx + 1})")
        
        # Prepare Prompt
        prompt = template_content.replace("[COMPONENT_NAME]", component)
        
        # Create Session
        create_session(current_key, source_name, prompt, component)
        
        active_count += 1
        
        # Throttling & Batching
        if active_count >= args.concurrency:
            print(f"⏳ Batch limit reached ({args.concurrency}). Pausing for 5 seconds...")
            time.sleep(5)
            active_count = 0
        else:
            # 1 second delay between tasks to avoid throttling
            time.sleep(1)

    print("✅ All dispatch requests completed.")

if __name__ == "__main__":
    main()
