#!/usr/bin/env python3
import os
import sys
import json
import argparse
import requests
from pathlib import Path

# Configuration
API_BASE_URL = "https://jules.googleapis.com/v1alpha"
ENV_FILE_PATH = Path(".env")
STATE_FILE_PATH = Path("state/sessions.json")

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
        return [k.strip() for k in val.split(",") if k.strip()]
    
    # Fallback
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

def get_session_details(api_key, session_id):
    """Fetches session details from Jules API."""
    headers = {"x-goog-api-key": api_key}
    url = f"{API_BASE_URL}/{session_id}"
    
    try:
        resp = requests.get(url, headers=headers)
        resp.raise_for_status()
        return resp.json()
    except Exception as e:
        return None

def main():
    parser = argparse.ArgumentParser(description="Check Swarm Status")
    parser.add_argument("--poke", action="store_true", help="Send 'hi' to sessions that seem stuck (not implemented yet)")
    args = parser.parse_args()

    # 1. Load Keys
    api_keys = load_api_keys()
    if not api_keys:
        print("❌ Error: API keys not found.")
        sys.exit(1)
    
    # 2. Load State
    if not STATE_FILE_PATH.exists():
        print("⚠️  No session state file found.")
        sys.exit(0)
        
    with open(STATE_FILE_PATH, "r") as f:
        sessions = json.load(f)

    print(f"{'COMPONENT':<20} | {'STATUS':<15} | {'SESSION ID':<40}")
    print("-" * 80)
    
    completed_count = 0
    
    for i, session in enumerate(sessions):
        # Round Robin Key
        api_key = api_keys[i % len(api_keys)]
        
        details = get_session_details(api_key, session["sessionId"])
        
        status = "UNKNOWN"
        if details:
            # Determine status based on API response fields
            # Note: The exact status field might vary, we infer from 'state' or existence of 'outputs'
            if details.get("state"):
                status = details.get("state")
            elif details.get("outputs"):
                status = "DONE (PR Ready)"
            else:
                status = "RUNNING"
        
        print(f"{session['component']:<20} | {status:<15} | {session['sessionId']:<40}")
        
        if "DONE" in str(status).upper() or "SUCCEEDED" in str(status).upper():
            completed_count += 1

    print("-" * 80)
    print(f"Summary: {completed_count}/{len(sessions)} tasks completed.")

if __name__ == "__main__":
    main()
