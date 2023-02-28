export interface InstanceRequestSchema {
    image: string;
    group: string;
    type: string;
    requestType: string;
    region: string;
    root_pass: string;
    label: string;
    authorized_keys: string[];
}

class InstanceRequest {
    image: string;
    group: string;
    type: string;
    requestType: string;
    region: string;
    root_pass: string;
    label: string;
    authorized_keys: string[];

    constructor(json: InstanceRequestSchema) {
        this.image = json.image;
        this.group = json.group;
        this.type = json.type;
        this.requestType = json.requestType;
        this.region = json.region;
        this.root_pass = json.root_pass;
        this.label = json.label;
        this.authorized_keys = json.authorized_keys;
    }
}

export default InstanceRequest
