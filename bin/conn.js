#!/usr/local/bin node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = __importDefault(require("../app/utils/Logger"));
const Utils_1 = require("../app/utils/Utils");
const app_1 = __importDefault(require("../app"));
const http = __importStar(require("http"));
const https = __importStar(require("https"));
const fs = __importStar(require("fs"));
const helmet_1 = __importDefault(require("helmet"));
Logger_1.default.info("Loading routes....");
app_1.default.use((0, helmet_1.default)());
Logger_1.default.success("All libs loaded. \t\t\t\t\t[✓]");
Logger_1.default.infob("Starting app...");
Logger_1.default.info("Loading TLS certs...");
const options = {
    key: fs.readFileSync((0, Utils_1.relativePath)("../resources/linode-services.imperio.key")).toString(),
    cert: fs.readFileSync((0, Utils_1.relativePath)("../resources/linode-services.imperio.crt")).toString(),
    ca: fs.readFileSync((0, Utils_1.relativePath)("../resources/imperio.crt")).toString()
};
Logger_1.default.info("TLS certs loaded checker: key" + options.key.split(" ")[0] + " cert" + options.cert.split(" ")[0] + " ca" + options.ca.split(" ")[0]);
const port = normalizePort(process.env.PORT || '80');
const securePort = normalizePort(process.env.PORTSECURE || '443');
Logger_1.default.info("Setting ports to: " + port + " / " + securePort);
console.log("\n");
const server = http.createServer(app_1.default);
const secureServer = https.createServer(options, app_1.default);
server.listen(port);
secureServer.listen(securePort);
secureServer.on('listening', onListeningSecure);
server.on('listening', onListening);
secureServer.on('error', onError);
server.on('error', onError);
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port))
        return val;
    if (port >= 0)
        return port;
    else
        return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    Logger_1.default.successb("Imperio Linode Services listening on " + bind + "\t[✓]");
}
function onListeningSecure() {
    const addrSecure = secureServer.address();
    const bindSecure = typeof addrSecure === 'string'
        ? '' + addrSecure
        : '' + addrSecure.port;
    Logger_1.default.successb("Imperio Linode Services listening secure on " + bindSecure + "\t[✓]");
}
