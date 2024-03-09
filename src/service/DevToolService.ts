import WebSocketClient from '../client/WebSocketClient';

class DevToolService {

    private webSocketClient: WebSocketClient;

    constructor(
        webSocketClient: WebSocketClient
    ) {
        this.webSocketClient = webSocketClient;
    }

    isConnected(): boolean {
        return this.webSocketClient.isConnected();
    }

    connect(url: string) {
        this.webSocketClient.connect(url);
    }
}

export default DevToolService;