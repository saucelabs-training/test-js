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
    {
        build: build,
        appiumVersion: appiumVersion,
        browserName: 'Safari',
        deviceName: 'iPhone XS Simulator',
        deviceOrientation: 'portrait',
        platformVersion: '14.0',
        platformName: 'iOS'
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
