#!/usr/local/bin node


import Logger from "../app/utils/Logger"
import {fileToString, relativePath} from "../app/utils/Utils"
import {app} from './app'
import * as http from 'http'
import * as https from 'https'
import helmet from "helmet"


app.use(helmet())
Logger.success("All libs loaded. \t\t\t\t\t[✓]")


const options = {
    key: fileToString("../resources/linode-services.imperio.key"),
    cert: fileToString("../resources/linode-services.imperio.crt"),
    ca: fileToString("../resources/imperio.crt")
}
Logger.info("TLS certs loaded checker: key" + options.key.split(" ")[0] + " cert" + options.cert.split(" ")[0] + " ca" + options.ca.split(" ")[0])

const port = normalizePort(process.env.PORT || '80')
const securePort = normalizePort(process.env.PORTSECURE || '443')
console.log("\n")

const server = http.createServer(app)
const secureServer = https.createServer(options, app)

server.listen(port)
secureServer.listen(securePort)
secureServer.on('listening', onListeningSecure)
server.on('listening', onListening)
secureServer.on('error', onError)
server.on('error', onError)


function normalizePort(val: string) {
    const port = parseInt(val, 10)

    if (isNaN(port)) return val
    if (port >= 0) return port
    else return false
}

function onError(error: any) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    Logger.successb("Imperio Linode Services listening on " + bind + "\t[✓]\n")
}

function onListeningSecure() {
    const addrSecure = secureServer.address()
    const bindSecure = typeof addrSecure === 'string'
        ? '' + addrSecure
        : '' + addrSecure.port
    Logger.successb("Imperio Linode Services listening secure on " + bindSecure + "\t[✓]")
}
