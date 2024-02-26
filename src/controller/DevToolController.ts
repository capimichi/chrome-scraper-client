import {Container, Service} from 'typedi';

@Service()
class DevToolController {

    constructor(devToolService) {
        this.devToolService = devToolService;
    }
}

export default DevToolController;