import Logger from '../utils/Logger'
import InstanceRequest, {InstanceRequestSchema} from './InstanceRequest'
import Instance, {InstanceSchema} from './Instance'


class TerraformClient {

    createSingleInstance = (instance: InstanceRequestSchema) => {

        Logger.infob("Instance request: " + instance.label + ", " + instance.image)
    }
}

export default TerraformClient
