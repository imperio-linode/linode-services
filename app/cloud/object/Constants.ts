const files = {
    linodeApiToken: "../resources/linode.txt"
}

const host = {
    gateway: "https://gateway.imperio",
    instances: "https://instances.imperio"
}
const endpoints = {
    addEngine: "/add-engine",
}

const linodeApiVersion = "v4";
const linodeApi = {
    host: "https://api.linode.com/" + linodeApiVersion,
    account: "/account"
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

export {
    files,
    host,
    endpoints,
    linodeApi,
    colors
};
