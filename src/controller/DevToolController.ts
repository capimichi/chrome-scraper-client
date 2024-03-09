import DevToolService from "../service/DevToolService";

class DevToolController {

    private devToolService: DevToolService;

    constructor(
        devToolService: DevToolService
    ) {
        this.devToolService = devToolService;
    }

    public isConnected(): boolean {
        return this.devToolService.isConnected();
    }

    public connect(url: string): void {
        this.devToolService.connect(url);
    }
}

export default DevToolController;