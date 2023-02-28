import Logger from '../../utils/Logger'
import {InstanceRequestSchema} from '../object/InstanceRequest'
import {fileToString, relativePath} from "../../utils/Utils"
import {files} from "../object/Constants"
/**
 * intercepts every request with the following config
 * see https://github.com/axios/axios#interceptors for more documentation.
 */


class LinodeClient {

    linodeToken: string

    constructor() {
        this.linodeToken = fileToString(files.linodeApiToken)

        Logger.info("Token assigned: " + this.linodeToken)
    }

    createSingleInstance = (instance: InstanceRequestSchema) => {
        Logger.info("Instance request: " + instance.label + ", " + instance.image)

    }
}

export default LinodeClient
