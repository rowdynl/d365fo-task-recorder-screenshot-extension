chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.name == 'screenshot') {
        chrome.tabs.captureVisibleTab(function(dataUrl) {			
            sendResponse({ screenshotUrl: dataUrl });
        });
    }
    return true;
});
