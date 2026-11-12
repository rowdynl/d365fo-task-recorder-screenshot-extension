# Testing Checklist

Test the extension in Microsoft Edge before submitting to stores.

## Permissions Testing - COMPLETED

### Test Result: SUCCESS

Testing confirmed that `chrome.tabs.captureVisibleTab()` requires:
- `tabs` permission
- `<all_urls>` host permission

**Finding:** Screenshots work correctly with these permissions.

**Configuration:**
- `tabs` permission in manifest
- `<all_urls>` in host_permissions
- Content script restricted to `https://*.dynamics.com/*`

### Conclusion
The permissions are correctly configured. The extension functions as intended.

---

## Full Testing Checklist

Complete before final release to stores.

1. Open Microsoft Edge
2. Navigate to `edge://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked"
5. Select the extension directory
6. Navigate to a D365FO instance (e.g., https://[instance].dynamics.com)
7. Open Task Recorder
8. Trigger screenshot capture
9. Verify screenshot pane is removed correctly
10. Check browser console (F12) for any errors

### Success Criteria

- Extension loads without errors
- Screenshot captures successfully
- No console errors
- Task recorder pane is removed from screenshot
- Extension functions normally with `tabs` permission

### Test Results

- Date tested: ___________
- Edge version: ___________
- Result: ___________
- Any errors: ___________
- Ready for store submission: YES / NO

