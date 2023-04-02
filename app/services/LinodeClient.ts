import Logger from '../utils/Logger'
import {InstanceRequestSchema} from '../object/InstanceRequest'
import {fileToString} from "../utils/Utils"
import {files, linodeApi} from "../object/Constants"
import {LinodeHttp} from "./HttpClient";


class LinodeClient {
    linodeToken: string
    linode: LinodeHttp

    constructor() {
        this.linodeToken = 'Bearer ' + fileToString(files.linodeApiToken)
        this.linode = new LinodeHttp(this.linodeToken)
    }

    createSingleInstance = (instance: InstanceRequestSchema) => {

        Logger.info("Instance request: " + instance.label + ", " + instance.image)

    }

    linodeUserInfoDetails = () => {
        return this.linode.get(linodeApi.account)
    }
}

export default LinodeClient
