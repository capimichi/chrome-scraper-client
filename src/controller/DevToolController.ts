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
}

export default DevToolController;