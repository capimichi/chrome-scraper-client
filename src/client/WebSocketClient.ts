// import WebSocket from 'ws';
import {JsonSerializer} from "typescript-json-serializer";
import IdentifyMessage from "../model/IdentifyMessage";
import TaskMessage from "../model/TaskMessage";
import TabManager from "../manager/TabManager";
import TaskHandler from "../handler/TaskHandler";
import OperationMessage from "../model/OperationMessage";

class WebSocketClient {
    private ws: WebSocket;

    private serializer: JsonSerializer;
    private taskHandler: TaskHandler;

    constructor(
        serializer: JsonSerializer,
        taskHandler: TaskHandler
    ) {
        this.serializer = serializer;
        this.taskHandler = taskHandler;
    }

    connect(url: string): void {

        if (this.isConnected()) {
            this.close();
        }

        let ws = new WebSocket(url);
        ws.onerror = this.handleError.bind(this);
        ws.onopen = this.handleOpen.bind(this);
        ws.onmessage = this.handleMessage.bind(this);
        ws.onclose = this.handleClose.bind(this);

        this.ws = ws;
    }

    handleError(event: Event): void {
        console.error('WebSocket error observed:', event);
        // this.close();
    }

    handleOpen(): void {
        let tableManager = TabManager.getInstance();
        // tableManager.navigateTo('https://www.vinted.fr').then(() => {
        // });
        this.identify();
    }

    handleMessage(event: MessageEvent): Promise<void> {
        let ws = this.ws;
        let taskHandler = this.taskHandler;
        let message_content = event.data;
        let message_json = JSON.parse(message_content);
        let operation = new OperationMessage(
            message_json['operation']['operation'],
            message_json['operation']['arguments']
        );
        let task_message = new TaskMessage(
            message_json['task_id'],
            operation,
            "",
            [],
            false
        );

        // check if task_message is an instance of TaskMessage
        if (!(task_message instanceof TaskMessage)) {
            console.error('Received message is not a task message');
            return;
        }
        let response_task = taskHandler.handle(task_message).then((response_task) => {
            let taskMessageJson = this.serializer.serialize(response_task);
            let taskMessageContent = JSON.stringify(taskMessageJson);
            ws.send(taskMessageContent);
        });

    }

    handleClose(event: CloseEvent): void {
        console.log('Disconnected:', event);
    }

    identify(): void {
        let identifyMessage = new IdentifyMessage('worker');
        let identifyMessageJson = this.serializer.serialize(identifyMessage);
        let identifyMessageContent = JSON.stringify(identifyMessageJson);
        this.ws.send(identifyMessageContent);
    }

    close(): void {
        // this.ws.close();
    }

    isConnected(): boolean {
        return this.ws && this.ws.readyState === WebSocket.OPEN;
    }
}

export default WebSocketClient;