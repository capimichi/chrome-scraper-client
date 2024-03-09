class TabManager {

    private static instance: TabManager;

    private tabId: number;

    static getInstance() {
        if (!TabManager.instance) {
            TabManager.instance = new TabManager();
        }
        return TabManager.instance;
    }

    constructor() {
        this.tabId = 0;
        this.loadTabId();
    }

    static setInstance(instance: TabManager) {
        TabManager.instance = instance;
    }

    getTabId(): number {
        return this.tabId;
    }

    setTabId(tabId: number): void {
        this.tabId = tabId;
    }

    navigateTo(url: string): Promise<chrome.tabs.Tab> {
        let tabId = this.getTabId();
        return chrome.tabs.update(tabId, {
            url: url
        });
    }

    private loadTabId(): void {

        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const tab = tabs[0];
            const tabId = tab.id;
            this.setTabId(tabId);
        });
    }
}

export default TabManager;