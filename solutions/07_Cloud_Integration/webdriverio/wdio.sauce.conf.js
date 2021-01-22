const { config: localConfig } = require('../../02_Setup/webdriverio/wdio.conf')
const path = require('path');
const build = `TestJS build-${new Date().getTime()}`;
const appiumVersion = '1.19.2';


exports.config = {
    /**
     * merge previous config
     */
    ...localConfig,
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
        name: 'Run on device description for iOS',
        build,
        platformName: 'iOS',
        browserName: 'safari',
        deviceName: 'iPhone XS'
    },
    /**
     * Android Testing
     */
    //Test on Android Real Devices
    {
        name: "Run on device description for Android",
        build,
        browserName: 'chrome',
        deviceName: 'Samsung Galaxy S10',
        platformName: 'Android'
    },
    //Test on Android Web
    {
        build: build,
        appiumVersion: '1.18.1',
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '11.0',
        deviceName: 'Google Pixel 3 XL GoogleAPI Emulator'
      },
      {
        build: build,
        appiumVersion: appiumVersion,
        browserName: 'Chrome',
        platformName: 'Android',
        platformVersion: '10.0',
        deviceName: 'Android GoogleAPI Emulator',
        appiumVersion: '1.18.1'
      }]
}
