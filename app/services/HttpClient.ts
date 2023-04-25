import axios from "axios";
import {host} from "../utils/Constants";
import Logger from "../utils/Logger";


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

    post = (resource: string, data: object) => {
        const str: string = this.token
        return axios.post(this.host + resource, data, {
            headers: {
                'Authorization': str
            }
        })
    }

    delete = (resource: string) => {
        const str: string = this.token
        return axios.delete(this.host + resource, {
            headers: {
                'Authorization': str
            }
        })
    }
}

export class LinodeHttp extends ServiceClient {
    constructor(token) {
        super(token, host.linode)
    }
}

export class GatewayHttp extends ServiceClient {
    constructor(token) {
        super(token, host.gateway)
    }
}

export class InstancesHttp extends ServiceClient {
    constructor(token) {
        super(token, host.instances)
    }
}
