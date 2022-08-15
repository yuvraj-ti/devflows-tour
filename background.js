chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("ui.devflows.devfactory.com/home/flows")) {
        chrome.tabs.sendMessage(tabId, {
            type: "NEW"
        });
    }
});
