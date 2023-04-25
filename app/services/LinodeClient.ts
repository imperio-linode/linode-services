import Logger from '../utils/Logger'
import InstanceRequest, {InstanceRequestSchema} from '../object/InstanceRequest'
import {fileToString} from "../utils/Utils"
import {files, linodeApi} from "../utils/Constants"
import {LinodeHttp} from "./HttpClient";


class LinodeClient {
    linodeToken: string
    linode: LinodeHttp

    constructor() {
        this.linodeToken = 'Bearer ' + fileToString(files.linodeApiToken)
        this.linode = new LinodeHttp(this.linodeToken)
    }

    createSingleInstance = (instance: InstanceRequestSchema): Promise<{ statusCode: number, body: any }> => {

        return this.linode.post(linodeApi.instances, new InstanceRequest(instance))
            .then(response => {
                Logger.log("Sent instance request ")
                return { statusCode: response.status, body: response.data }
            })
            .catch(error => {
                Logger.err("Error sending instance request: " + error)
                return { statusCode: error.response.status, body: error.response.data }
            })
    }

    deleteSingleInstance = (instanceId: string): Promise<{ statusCode: number, body: any }> => {
        return this.linode.delete(linodeApi.instances + "/" + instanceId)
            .then(response => {
                Logger.log("Deleted instance " + instanceId)
                return { statusCode: response.status, body: response.data }
            })
            .catch(error => {
                Logger.err("Error deleting instance: " + error)
                return { statusCode: error.response.status, body: error.response.data }
            })
    }

    linodeUserInfoDetails = () => {
        return this.linode.get(linodeApi.account)
            .then(r => r.status)
            .catch(error => {
                Logger.err("Error getting linode user info: " + error)
                error.response.status
            })
    }
}

export default LinodeClient
