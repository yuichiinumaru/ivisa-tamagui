from playwright.sync_api import sync_playwright

def verify_error_boundary():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Storybook
        try:
            page.goto("http://localhost:6006/iframe.html?id=molecules-componenterrorboundary--default&viewMode=story")
            page.wait_for_selector("text=I am a safe component", timeout=5000)
            page.screenshot(path="verification/default.png")
            print("Captured default.png")

            # Check WithError story
            page.goto("http://localhost:6006/iframe.html?id=molecules-componenterrorboundary--with-error&viewMode=story")
            # We expect the error text to be NOT visible, but the explanatory text TO BE visible
            page.wait_for_selector("text=Below this text, there should be nothing rendered", timeout=5000)

            # Ensure "I crashed!" is NOT visible (since it's caught and rendered as null)
            # Actually, the error might be logged to console, but not rendered in DOM.
            # We can verify that "I am a buggy component" is NOT present.
            if page.is_visible("text=I am a buggy component"):
                print("FAILURE: Buggy component text is visible!")
            else:
                print("SUCCESS: Buggy component text is hidden.")

            page.screenshot(path="verification/with_error.png")
            print("Captured with_error.png")

            # Check Interactive story
            page.goto("http://localhost:6006/iframe.html?id=molecules-componenterrorboundary--interactive&viewMode=story")
            page.wait_for_selector("text=Trigger Error", timeout=5000)
            page.click("text=Trigger Error")
            page.wait_for_selector("text=The component above has crashed", timeout=5000)
            page.screenshot(path="verification/interactive.png")
            print("Captured interactive.png")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_error_boundary()
