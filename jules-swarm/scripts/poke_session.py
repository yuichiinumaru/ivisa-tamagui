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

def send_input(api_key, session_id, message):
    """Sends input to a Jules session."""
    headers = {
        "x-goog-api-key": api_key,
        "Content-Type": "application/json"
    }
    if not session_id.startswith("sessions/"):
        full_id = f"sessions/{session_id}"
    else:
        full_id = session_id
        
    url = f"{API_BASE_URL}/{full_id}:sendInput"
    
    payload = {
        "input": {
            "text": message
        }
    }
    
    print(f"📡  Sending Input to: {url}")
    print(f"    Message: '{message}'")
    
    try:
        resp = requests.post(url, headers=headers, json=payload)
        resp.raise_for_status()
        data = resp.json()
        print("✅ Input Sent Successfully!")
        print(json.dumps(data, indent=2))
        return data
    except Exception as e:
        print(f"❌ Error sending input: {e}")
        if 'resp' in locals():
            print(f"   Response: {resp.text}")
        return None

def main():
    parser = argparse.ArgumentParser(description="Poke Jules Session")
    parser.add_argument("id", help="Session ID (e.g. sessions/12345)")
    parser.add_argument("message", help="Message to send")
    args = parser.parse_args()

    api_keys = load_api_keys()
    if not api_keys:
        print("❌ Error: API keys not found.")
        sys.exit(1)

    send_input(api_keys[0], args.id, args.message)

if __name__ == "__main__":
    main()
