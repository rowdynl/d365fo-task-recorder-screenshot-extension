# Permissions Analysis

## Current Permissions

```json
"permissions": [
  "tabs"
],
"host_permissions": [
  "<all_urls>"
]
```

## Why Each Permission is Needed

### `"tabs"` Permission
**Required for:** `chrome.tabs.captureVisibleTab()`

The `tabs` permission is required for the captureVisibleTab() API to function in Microsoft Edge.

**Usage in code:**
- `background.js`: `chrome.tabs.captureVisibleTab()`

**Testing status:** VERIFIED - Required for screenshot capture.

### `"host_permissions"` - `<all_urls>`
**Required for:** `chrome.tabs.captureVisibleTab()` to access any tab

The `captureVisibleTab()` API requires broad host permissions. While limiting to `https://*.dynamics.com/*` would be more restrictive, testing confirmed that `<all_urls>` is necessary for the capture functionality to work.

**Usage in code:**
- `background.js`: `chrome.tabs.captureVisibleTab()` - needs permission to access the active tab on any URL
- `screenshot.js`: Content script runs on `https://*.dynamics.com/*` sites only

## Permission Minimization

This extension uses necessary permissions for screenshot functionality:

- `tabs` permission - Required for captureVisibleTab() API
- `<all_urls>` host permission - Required for captureVisibleTab() to access tabs
- Content script restricted to `https://*.dynamics.com/*` only
- No access to history, cookies, storage, or other browser data
- No external network requests

## Privacy Impact

Users can verify:
- No data is collected or transmitted
- No tracking or analytics
- Extension only processes images locally
- No background activity outside D365FO sites
- See [PRIVACY.md](PRIVACY.md) for full privacy details


