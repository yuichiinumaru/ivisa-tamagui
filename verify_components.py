import os
import time
import json
from playwright.sync_api import sync_playwright

STORYBOOK_URL = "http://localhost:6006"
SCREENSHOT_DIR = "screenshots"
LOG_DIR = "logs"

if not os.path.exists(SCREENSHOT_DIR):
    os.makedirs(SCREENSHOT_DIR)
if not os.path.exists(LOG_DIR):
    os.makedirs(LOG_DIR)

def get_valid_stories(page):
    try:
        resp = page.goto(f"{STORYBOOK_URL}/index.json")
        data = json.loads(resp.text())
        entries = data.get("entries", {})
        print(f"Found {len(entries)} stories in index.")
        return entries
    except Exception as e:
        print(f"Failed to fetch index.json: {e}")
        return {}

def verify_story(page, name, story_id):
    url = f"{STORYBOOK_URL}/iframe.html?id={story_id}&viewMode=story"
    print(f"Checking {name} (ID: {story_id}) at {url}...")

    logs = []
    page.on("console", lambda msg: logs.append(f"CONSOLE: {msg.type}: {msg.text}"))
    page.on("pageerror", lambda exc: logs.append(f"PAGE ERROR: {exc}"))

    try:
        page.goto(url, wait_until="networkidle", timeout=15000)
    except Exception as e:
        logs.append(f"NAVIGATION ERROR: {e}")

    time.sleep(2)

    page.screenshot(path=os.path.join(SCREENSHOT_DIR, f"{name}.png"))

    with open(os.path.join(LOG_DIR, f"{name}.log"), "w") as f:
        f.write("\n".join(logs))

    return logs

def main():
    print("Starting verification...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            page.goto(STORYBOOK_URL, timeout=5000)
            print("Storybook is reachable.")
        except:
            print("Storybook not reachable. Is it running?")
            browser.close()
            return

        index_entries = get_valid_stories(page)

        targets = {
            "Welcome": ["bem-vindo"],
            "DataTable": ["datatable"],
            "Button": ["button"],
            "Toggle": ["toggle"],
            "Textarea": ["textarea"],
            "Tooltip": ["tooltip"],
            "Avatar": ["avatar"],
            "Dialog": ["dialog"],
            "AuthScreen": ["authscreen"],
            "A11yToolbar": ["a11ytoolbar"],
        }

        selected_stories = {}

        for sid, entry in index_entries.items():
            sid_lower = sid.lower()
            for target, keywords in targets.items():
                if any(k in sid_lower for k in keywords):
                    current_prio = 0
                    if 'docs' in sid_lower:
                        if target == "Welcome": current_prio = 10
                        else: current_prio = -1
                    elif 'padrao' in sid_lower or 'default' in sid_lower or 'primario' in sid_lower:
                        current_prio = 5
                    else:
                        current_prio = 1

                    if target not in selected_stories or current_prio > selected_stories[target][1]:
                        selected_stories[target] = (sid, current_prio)

        for target, (sid, _) in selected_stories.items():
            print(f"Selected story for {target}: {sid}")
            verify_story(page, target, sid)

        browser.close()

if __name__ == "__main__":
    main()
