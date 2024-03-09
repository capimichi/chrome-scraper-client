class RequestManager {

    private static instance: RequestManager;

    private requests: chrome.devtools.network.Request[] = [];

    static getInstance() {
        if (!RequestManager.instance) {
            RequestManager.instance = new RequestManager();
        }
        return RequestManager.instance;
    }

    constructor() {
        this.initLoadRequest();
    }

    static setInstance(instance: RequestManager) {
        RequestManager.instance = instance;
    }

    getRequests(): chrome.devtools.network.Request[] {
        return this.requests;
    }

    getFirstDocumentRequest(): chrome.devtools.network.Request {
        return this.requests.find(request => request.response.content.mimeType === 'text/html');
    }

    private initLoadRequest(): void {
        chrome.devtools.network.onRequestFinished.addListener(request => {
            this.requests.push(request);
        });
    }

}

export default RequestManager;