import axios from "axios";
import {host} from "../object/Constants";
import Logger from "../../utils/Logger";


interface endpointToRequest {
    (resource: string): Promise<any>;
}

export interface Client {
    get: endpointToRequest
    token: string
}

class ServiceClient implements Client {
    token: string
    host: string

    constructor(token, host) {
        this.token = token.split("\n")[0]
        this.host = host
    }


    get = (resource: string) => {
        const str: string = this.token
        return axios.get(this.host + resource, {
            headers: {
                'Authorization': str
            }
        })
    }
}

export class Linode extends ServiceClient {
    constructor(token) {
        super(token, host.linode);
    }
}

export class Gateway extends ServiceClient {
    constructor(token) {
        super(token, host.gateway);
    }
}

export class Instances extends ServiceClient {
    constructor(token) {
        super(token, host.instances);
    }
}
