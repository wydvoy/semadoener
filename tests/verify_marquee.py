import os
from playwright.sync_api import sync_playwright

def run_test():
    # Use file:// protocol for verification
    abs_path = os.path.abspath("index.html")
    url = f"file://{abs_path}"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Don't record video to avoid hardcoded paths
        page = browser.new_page()

        # Intercept and abort requests to external CDNs to avoid timeouts
        def handle_route(route):
            if any(domain in route.request.url for domain in ["googleapis.com", "gstatic.com", "tailwindcss.com"]):
                route.abort()
            else:
                route.continue_()

        page.route("**/*", handle_route)

        # Go to the local page
        page.goto(url, wait_until="domcontentloaded")

        # Identify the marquee element
        marquee = page.locator(".marquee-content")
        marquee.wait_for(state="attached")

        # Get the innerHTML
        inner_html = marquee.evaluate("el => el.innerHTML")

        # Identify the &nbsp; or \u00a0 character
        # The logic is: marqueeContent.innerHTML += "&nbsp;" + marqueeContent.innerHTML;
        # We can find the index of the first &nbsp; or \u00a0

        separator = None
        if "&nbsp;" in inner_html:
            separator = "&nbsp;"
        elif "\u00a0" in inner_html:
            separator = "\u00a0"

        assert separator is not None, f"Marquee content was not duplicated (no separator found). innerHTML: {repr(inner_html)}"

        # Split into two parts around the first occurrence of the separator
        split_index = inner_html.find(separator)
        first_half = inner_html[:split_index].strip()
        second_half = inner_html[split_index + len(separator):].strip()

        assert first_half == second_half, f"Duplicated content mismatch.\nFirst: {repr(first_half)}\nSecond: {repr(second_half)}"

        print("Marquee duplication test passed!")
        browser.close()

if __name__ == "__main__":
    run_test()
