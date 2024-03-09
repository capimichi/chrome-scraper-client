import TaskMessage from "../model/TaskMessage";
import OperationEnum from "../enum/OperationEnum";
import TabManager from "../manager/TabManager";
import RequestManager from "../manager/RequestsManager";
import MessageHelper from "../helper/MessageHelper";

class TaskHandler {

    public async handle(task: TaskMessage): Promise<TaskMessage> {
        switch (task.getOperation().getOperation()) {
            case OperationEnum.GET_PAGE:
                task = await this.handleGetPage(task);
                break;
            default:
                console.log('Unknown task: ' + task.getOperation().getOperation());
        }

        return task;
    }

    private async handleGetPage(task: TaskMessage): Promise<TaskMessage> {
        let data_arguments = task.getOperation().getArguments();
        let url = data_arguments['url'];
        let tabManager = TabManager.getInstance();
        let requestsManager = RequestManager.getInstance();

        await tabManager.navigateTo(url);

        // wait for 5 seconds
        await new Promise(resolve => setTimeout(resolve, 5000));

        let tabId = tabManager.getTabId();
        let content = await MessageHelper.sendMessageToTab(tabId, task);

        task.setCompleted(true);
        task.setResult(content);

        return task;
    }


}

export default TaskHandler;