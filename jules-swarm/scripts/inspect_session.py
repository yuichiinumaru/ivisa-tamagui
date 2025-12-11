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
    # Ensure session_id has 'sessions/' prefix if missing
    if not session_id.startswith("sessions/"):
        full_id = f"sessions/{session_id}"
    else:
        full_id = session_id
        
    url = f"{API_BASE_URL}/{full_id}"
    
    print(f"📡  Fetching: {url}")
    try:
        resp = requests.get(url, headers=headers)
        resp.raise_for_status()
        base_data = resp.json()
        
        # Try fetching likely history endpoints
        endpoints = ["suggestions", "history", "turns", "messages", "events"]
        
        for ep in endpoints:
            ep_url = f"{API_BASE_URL}/{full_id}/{ep}"
            print(f"📡  Probing: {ep_url}")
            try:
                ep_resp = requests.get(ep_url, headers=headers)
                if ep_resp.status_code == 200:
                    print(f"   ✅ FOUND DATA at /{ep}!")
                    base_data[ep] = ep_resp.json()
                else:
                    print(f"   (Status: {ep_resp.status_code})")
            except Exception:
                pass
            
        return base_data
    except Exception as e:
        print(f"❌ Error fetching {session_id}: {e}")
        if 'resp' in locals():
            print(f"   Response: {resp.text}")
        return None

def main():
    parser = argparse.ArgumentParser(description="Inspect Jules Session Details")
    parser.add_argument("ids", nargs="+", help="Session IDs to inspect (e.g. sessions/12345)")
    args = parser.parse_args()

    api_keys = load_api_keys()
    if not api_keys:
        print("❌ Error: API keys not found.")
        sys.exit(1)

    print(f"🔑 Using API Key ending in ...{api_keys[0][-6:]}")

    for i, session_id in enumerate(args.ids):
        print(f"\n[{i+1}/{len(args.ids)}] Inspetcting: {session_id}")
        data = get_session_details(api_keys[0], session_id)
        
        if data:
            print(f"✅ State: {data.get('state', 'UNKNOWN')}")
            
            # Print basic fields
            print(f"   Name: {data.get('name')}")
            print(f"   CreateTime: {data.get('createTime')}")
            
            # Look for conversation history or status
            print("\n📋  Keys found in response:", list(data.keys()))
            
            # Dump interesting sections
            if 'error' in data:
                print(f"\n❌ ERROR FOUND: {json.dumps(data['error'], indent=2)}")
                
            if 'outputs' in data:
                print(f"\n📤 OUTPUTS: {json.dumps(data['outputs'], indent=2)}")
                
            # Try to grab the last few messages if they exist in some common format
            # (Based on typical agent API structures, though specific to Jules this is a guess)
            # If standard response doesn't show history, we might need a separate endpoint.
            
            print("\n--- Full JSON Dump (truncated) ---")
            print(json.dumps(data, indent=2)[:2000] + "...")
        print("-" * 60)

if __name__ == "__main__":
    main()
