const { config: localConfig } = require('../../02_Setup/webdriverio/wdio.conf')
const path = require('path');
const buildName = `TestJS build-${(Date.now() / 1000).toFixed()}`;

const appiumConfig = {
    'sauce:config': {
        build: buildName,
        appiumVersion: '1.19.2'
    }
}

const sauceConfig = {
    'sauce:config': {
        build: buildName
    }
}


exports.config = {
    /**
     * merge previous config
     */
    ...localConfig,
    logLevel: 'trace',
    reporters: ['spec'],
    specs: ['./test/specs/**/*.js'],
    /**
     * set Sauce credentials
     */
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    /**
     * add @wdio/saucelabs-service
     */
    services: ['sauce'],
    /**
     * set more capabilities
     */
    capabilities: [
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10',
        ...sauceConfig
    },
    {
        browserName: 'chrome',
        browserVersion: 'latest-1',
        platformName: 'Windows 10',
        ...sauceConfig
    }, 
    {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'MacOS 10.15',
        ...sauceConfig
    },
    /**
     * iOS Real Devices
     */
    {
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS',
        ...appiumConfig
    },
    {
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone 11.*',
        ...appiumConfig
    },
    /**
     * Android Testing
     */
    //Test on Android Real Devices
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Samsung Galaxy S.*',
        ...appiumConfig
    },
    {
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel.*',
        ...appiumConfig
    }]
}
