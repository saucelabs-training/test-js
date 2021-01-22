const { config } = require('./wdio.conf')

exports.config = {
    ...config,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    services: ['sauce'],
    capabilities: [{
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            extendedDebugging: true,
            capturePerformance: true
        }
    }]
}