import {JsonProperty, JsonObject} from 'typescript-json-serializer';

@JsonObject()
class OperationMessage {

    @JsonProperty()
    private operation: string;

    @JsonProperty({name: 'arguments'})
    private arguments?: { [key: string]: any };

    constructor(operation: string, args?: { [key: string]: any }) {
        this.operation = operation;
        this.arguments = args;
    }

    getOperation(): string {
        return this.operation;
    }

    setOperation(value: string) {
        this.operation = value;
    }

    getArguments(): { [key: string]: any } | undefined {
        return this.arguments;
    }

    setArguments(value: { [key: string]: any } | undefined) {
        this.arguments = value;
    }
}

export default OperationMessage;