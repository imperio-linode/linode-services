import Logger from '../utils/Logger'
import InstanceRequest, {InstanceRequestSchema} from './InstanceRequest'
import Instance, {InstanceSchema} from './Instance'
import * as fs from "fs"
import {relativePath} from "../utils/Utils"


class TerraformClient {
    linodeToken: string

    constructor() {
        this.linodeToken = fs.readFileSync(relativePath("../resources/linode.txt")).toString()
    }

    createSingleInstance = (instance: InstanceRequestSchema) => {

        Logger.infob("Instance request: " + instance.label + ", " + instance.image + " token: " + this.linodeToken)
    }
}

export default TerraformClient
