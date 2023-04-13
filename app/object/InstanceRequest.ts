export interface InstanceRequestSchema {
    image: string;
    group: string;
    type: string;
    requestType: string;
    region: string;
    rootPass: string;
    label: string;
    authorizedKeys: string[];
}

class InstanceRequest {
    image: string;
    group: string;
    type: string;
    request_type: string;
    region: string;
    root_pass: string;
    label: string;
    authorized_keys: string[];

    constructor(json: InstanceRequestSchema) {
        this.image = json.image;
        this.group = json.group;
        this.type = json.type;
        this.request_type = json.requestType;
        this.region = json.region;
        this.root_pass = json.rootPass;
        this.label = json.label;
        this.authorized_keys = json.authorizedKeys;
    }
}

export default InstanceRequest
