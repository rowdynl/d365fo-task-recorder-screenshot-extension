# Permissions Analysis

## Current Permissions

```json
"permissions": [
  "tabs"
],
"host_permissions": [
  "https://*.dynamics.com/*"
]
```

## Why Each Permission is Needed

### `"tabs"` Permission
**Required for:** `chrome.tabs.captureVisibleTab()`

The `chrome.tabs.captureVisibleTab()` API explicitly requires the `"tabs"` permission in Manifest V3, even though we only use it to capture the currently visible tab without accessing sensitive tab properties like URL, title, or favicon.

**Usage in code:**
- `background.js`: `chrome.tabs.captureVisibleTab()`

**Alternatives considered:**
- None. There is no alternative Chromium API to capture screenshots without the `tabs` permission.

### `"host_permissions"` Permission
**Required for:** Content script access to D365FO sites

The content script must run on `https://*.dynamics.com/*` to receive screenshot events and process captured images.

**Usage in code:**
- `screenshot.js`: Runs on all dynamics.com sites to intercept screenshot requests

## Permission Minimization

This extension follows Chrome's principle of least privilege:

- Only two permissions declared (minimal)
- `tabs` permission only accesses screenshot functionality, not sensitive tab properties
- Host permissions restricted to `*.dynamics.com` only, not broad patterns like `<all_urls>`
- No access to history, cookies, storage, or other browser data
- No external network requests

## Privacy Impact

Users can verify:
- No data is collected or transmitted
- No tracking or analytics
- Extension only processes images locally
- No background activity outside D365FO sites
- See [DISCLAIMER.md](DISCLAIMER.md) for full privacy details
