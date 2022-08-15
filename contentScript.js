(() => {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type } = obj;

        if (type === "NEW") {
            newVideoLoaded();
        }
    });
    const newVideoLoaded = () => {
        console.log('helo');
    }
    newVideoLoaded();
})();