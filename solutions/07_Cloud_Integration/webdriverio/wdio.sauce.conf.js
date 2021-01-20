const { config: localConfig } = require('../../02_Setup/webdriverio/wdio.conf')
const path = require('path');

exports.config = {
    /**
     * merge previous config
     */
    ...localConfig,
    /**
     * user same tests from chapter 2
     */
    specs: [path.join(__dirname, '..', '..', '02_Setup', 'webdriverio', 'tests', '**', '*.js')],
    /**
     * set Sauce credentials
     */
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    /**
     * add @wdio/saucelabs-service
     */
    services: ['sauce']
    /**
     * set more capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10'
    }, {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'MacOS 10.15'
    }, {
        browserName: 'Safari',
        appiumVersion: '1.19.1',
        deviceName: 'iPhone 11 Pro Max Simulator',
        deviceOrientation: 'portrait',
        platformVersion: '14.0',
        platformName: 'iOS'
    }]
}
