
const makeLog = txt => {
    return '[' + new Date().toString().split(" GMT")[0] +'] ' + (txt || 'No log provided');
}

const log = txt => {
    console.log( log(txt) || 'No log provided')
}
const success = txt => {
    console.log(colour("green", makeLog(txt) || 'No log provided'))
}
const successb = txt => {
    console.log(colour("greenb", makeLog(txt) || 'No log provided'))
}
function info(txt) {
    console.log(colour("yellow", makeLog(txt) || 'No log provided'))
}
function infob(txt) {
    console.log(colour("yellowb", makeLog(txt) || 'No log provided'))
}


module.exports = {
    info,
    success,
    successb,
    infob,
    log
}

colour.red = '\x1B[31m';
colour.yellow = '\x1B[33m';
colour.yellowb = '\x1B[1;33m';
colour.greenb = '\x1B[1;32m';
colour.green = '\x1B[32m';
colour.black = '\x1B[39m';
colour.close = '\x1B[0m'

function colour(c, str) {
    return (colour[c]) + str + colour.close;
}
