const { config: localConfig } = require('../../02_Setup/webdriverio/wdio.conf')
const path = require('path');
const build = `TestJS build-${new Date().getTime()}`;
const appiumVersion = '1.19.2';


exports.config = {
    /**
     * merge previous config
     */
    ...localConfig,
    logLevel: 'error',
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
        platformName: 'Windows 10'
    },
    {
        browserName: 'chrome',
        browserVersion: 'latest-1',
        platformName: 'Windows 10'
    }, 
    {
        browserName: 'safari',
        browserVersion: 'latest',
        platformName: 'MacOS 10.15'
    },
    {
        browserName: 'safari',
        browserVersion: 'latest-1',
        platformName: 'MacOS 10.15'
    },
    //Test on iOS Mobile Web Emusim
    {
        build: build,
        appiumVersion: appiumVersion,
        browserName: 'Safari',
        platformVersion: '14.0',
        platformName: 'iOS',
        deviceName: 'iPhone XS Simulator',
    },
    {
        build: build,
        appiumVersion: appiumVersion,
        browserName: 'Safari',
        platformVersion: '14.0',
        platformName: 'iOS',
        deviceName: 'iPhone X Simulator'
    },
    /**
     * iOS Real Devices
     */
    {
        build: build,
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS'
    },
    {
        build: build,
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone X'
    },
    {
        build: build,
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone 11 Pro Max'
    },
    {
        build: build,
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone 12'
    },
    /**
     * Android Testing
     */
    //Test on Android Real Devices
    {
        build: build,
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Samsung Galaxy S10',
    },
    {
        build: build,
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 5',
    },
    {
        build: build,
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 4a',
    },
    {
        build: build,
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 4 XL',
    },
    {
        build: build,
        browserName: 'chrome',
        platformName: 'Android',
        deviceName: 'Google Pixel 4',
    },
    //Test on Android Web
    {
        build: build,
        appiumVersion: '1.18.1',
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'Google Pixel 3 XL GoogleAPI Emulator'
      }]
}
