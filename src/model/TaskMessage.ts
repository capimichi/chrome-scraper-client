import OperationMessage from './OperationMessage';
import {JsonProperty, JsonObject} from 'typescript-json-serializer';

@JsonObject()
class TaskMessage {

    @JsonProperty({name: 'task_id'})
    private task_id: string;

    @JsonProperty({name: 'operation'})
    private operation: OperationMessage;

    @JsonProperty({name: 'result'})
    private result?: string;

    @JsonProperty({name: 'errors'})
    private errors?: string[];

    @JsonProperty({name: 'completed'})
    private completed: boolean = false;

    constructor(taskId: string, operation: OperationMessage, result?: string, errors?: string[], completed: boolean = false) {
        this.task_id = taskId;
        this.operation = operation;
        this.result = result;
        this.errors = errors;
        this.completed = completed;
    }

    public getTaskId(): string {
        return this.task_id;
    }

    public setTaskId(taskId: string): void {
        this.task_id = taskId;
    }

    public getOperation(): OperationMessage {
        return this.operation;
    }

    public setOperation(operation: OperationMessage): void {
        this.operation = operation;
    }

    public getResult(): string {
        return this.result;
    }

    public setResult(result: string): void {
        this.result = result;
    }

    public getErrors(): string[] {
        return this.errors;
    }

    public setErrors(errors: string[]): void {
        this.errors = errors;
    }

    public isCompleted(): boolean {
        return this.completed;
    }

    public setCompleted(completed: boolean): void {
        this.completed = completed;
    }
}

export default TaskMessage;