
const relativePath = command => {
    return require('path').resolve(__dirname, command)
}


module.exports = {
    relativePath
}

