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
    print(f"Checking {name} (ID: {story_id})...")

    logs = []
    page.on("console", lambda msg: logs.append(f"CONSOLE: {msg.type}: {msg.text}"))
    page.on("pageerror", lambda exc: logs.append(f"PAGE ERROR: {exc}"))

    try:
        page.goto(url, wait_until="networkidle", timeout=8000)
    except Exception as e:
        logs.append(f"NAVIGATION ERROR: {e}")

    time.sleep(1)

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

        components = {}
        for sid, entry in index_entries.items():
            if 'docs' in sid: continue
            title = entry.get('title')
            name = entry.get('name')

            if title not in components:
                components[title] = []
            components[title].append((sid, name))

        final_list = []
        for title, stories in components.items():
            best_sid = stories[0][0]
            for sid, name in stories:
                name_lower = name.lower()
                if 'padrao' in name_lower or 'default' in name_lower or 'primario' in name_lower:
                    best_sid = sid
                    break

            safe_title = title.replace('/', '_').replace(' ', '_')
            final_list.append((safe_title, best_sid))

        print(f"Selected {len(final_list)} unique components to check.")

        failed_count = 0
        for name, sid in final_list:
            logs = verify_story(page, name, sid)
            has_error = False
            for l in logs:
                if "PAGE ERROR" in l or "Cannot assign to read only property" in l or "Element type is invalid" in l or "Unexpected text node" in l or "Converting circular structure" in l:
                    has_error = True
                    break
            if has_error:
                print(f"FAILED: {name} ({sid})")
                failed_count += 1

        print(f"Verification complete. {failed_count} failures detected.")
        browser.close()

if __name__ == "__main__":
    main()
