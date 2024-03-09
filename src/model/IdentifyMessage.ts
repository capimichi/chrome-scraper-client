import {JsonProperty, JsonObject} from 'typescript-json-serializer';

@JsonObject()
class IdentifyMessage {

    @JsonProperty()
    private type: string;

    constructor(type: string) {
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    public setType(type: string): void {
        this.type = type;
    }
}

export default IdentifyMessage;