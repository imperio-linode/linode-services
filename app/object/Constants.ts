export {
    files,
    host,
    endpoints,
    linodeApi,
    colors
};

//todo: lmao... redux lets go?
const files = {
    linodeApiToken: "../resources/linode.txt"
}

const linodeApiVersion = "v4";

const host = {
    gateway: "https://gateway.imperio",
    instances: "https://instances.imperio",
    linode: "https://api.linode.com/" + linodeApiVersion,
}

const endpoints = {
    empty: "/",
    addInstance: "/add",
    account: "/account",
    instance: "/instance"
}

const linodeApi = {
    account: "/account",
    instances: "/linode/instances",
}

const colors = {
    red: "\x1B[31m",
    yellow: "\x1B[33m",
    yellowb: "\x1B[1;33m",
    greenb: "\x1B[1;32m",
    green: "\x1B[32m",
    black: "\x1B[39m",
    close: "\x1B[0m"
}
