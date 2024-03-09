import OperationEnum from "../enum/OperationEnum";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.operation.operation) {
        case OperationEnum.GET_PAGE:
            let content = document.documentElement.outerHTML;
            sendResponse(content);
            break;
        default:
            console.log('Unknown task: ' + request.operation.operation);
    }
});