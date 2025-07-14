const path = require('path')

module.exports = {
    mode: 'development', 
    entry: {
        main: './index.js',
       analytics: './analytics.js'
    }, 
    output: {
        filename: 'bundle.js'
        path: path.resolve(__dirname, 'dist')
    }
}