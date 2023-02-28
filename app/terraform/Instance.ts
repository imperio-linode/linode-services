export interface InstanceSchema {
    id: number;
    region: string;
    alert: null | string;
    address: null | string;
    spec: null | string;
    available: null | string;
    enabled: null | string;
    last_successful: null | string;
    backup_day: null | string;
    window: null | string;
    created: string;
    group: string;
    host_uuid: null | string;
    hypervisor: null | string;
    image: string;
    label: string;
    status: null | string;
    tags: string[];
    type: string;
    updated: null | string;
    watchdog_enabled: null | string;
}

class Instance {
    id: number;
    region: string;
    alert: null | string;
    address: null | string;
    spec: null | string;
    available: null | string;
    enabled: null | string;
    last_successful: null | string;
    backup_day: null | string;
    window: null | string;
    created: Date;
    group: string;
    host_uuid: null | string;
    hypervisor: null | string;
    image: string;
    label: string;
    status: null | string;
    tags: string[];
    type: string;
    updated: null | string;
    watchdog_enabled: null | string;

    constructor(json: InstanceSchema) {
        this.id = json.id;
        this.region = json.region;
        this.alert = json.alert;
        this.address = json.address;
        this.spec = json.spec;
        this.available = json.available;
        this.enabled = json.enabled;
        this.last_successful = json.last_successful;
        this.backup_day = json.backup_day;
        this.window = json.window;
        this.created = new Date(json.created);
        this.group = json.group;
        this.host_uuid = json.host_uuid;
        this.hypervisor = json.hypervisor;
        this.image = json.image;
        this.label = json.label;
        this.status = json.status;
        this.tags = json.tags;
        this.type = json.type;
        this.updated = json.updated;
        this.watchdog_enabled = json.watchdog_enabled;
    }
}

export default Instance
