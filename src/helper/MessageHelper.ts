class MessageHelper {

    static sendMessageToTab(tabId: any, message: any): Promise<any> {
        return new Promise((resolve) => {
            chrome.tabs.sendMessage(tabId, message, resolve)
        })
    }

}

export default MessageHelper;