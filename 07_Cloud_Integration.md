# Cloud Integration

The next step in our journey of a having a scaleable and cross browser test suite is to run tests in the cloud. Advantages of cloud execution include:
1. Ability to scale to run in parallel without needing extra hardware
2. Ability to perform web and mobile testing
3. Access to advanced debugging capabilities such as videos, screenshots, and logs (with no extra code 🎉)
4. Access to extra analytics

The objective of this chapter is to:

- Tweak the setup to allow running tests locally __and__ with a cloud provider
- add your credentials as repository secret and update your GitHub workflow to run tests in the cloud
- increase the browser coverage and run on multiple desktop as well as on at least mobile web browser

You can register a free trial account at any of the common cross browser cloud vendors, e.g. Sauce Labs. Many of them provide [platform configurator](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator?src=sidebar) that allow you to click together the correct capabilities for your configuration.

## WebdriverIO

The WebdriverIO testrunner allows you to define multiple capabilities that map to every spec file that it can find. So if you define e.g. 3 capabilities and have 5 test files it will ultimatively start 15 automated sessions in parallel. You can limit the amount of parallel session by tweaking the [`maxInstances`](https://webdriver.io/docs/options.html#maxinstances) option.

### Your Challenge

Configure Cloud Integration for your test automation.

1. Sign Up for your Free Trial account of [Sauce Labs](https://saucelabs.com/sign-up).
> Note, this will work with other cloud services as well
2. To run your session on Sauce Labs, Browerstack or Testingbot WebdriverIO only needs to have [`user`](https://webdriver.io/docs/options.html#user) and [`key`](https://webdriver.io/docs/options.html#key) defined in your config. Other cloud vendors require also a specific [`protocol`](https://webdriver.io/docs/options.html#protocol), [`hostname`](https://webdriver.io/docs/options.html#hostname) and [`port`](https://webdriver.io/docs/options.html#port).

Get your Username and Access Key in your Sauce account [here](https://app.saucelabs.com/user-settings).
4. Reference your username and accesskey in the conf.js
```js
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
```
5. Make sure to store these values into your system environment variables. It's an industry best practice.
6. In addition to that WebdriverIO provides plugins that improve the integration with the vendor. Install [`@wdio/sauce-service`](https://webdriver.io/docs/sauce-service.html) by running `npm i @wdio/sauce-service --save-dev`
7. Add the Sauce service and capability to run on Chrome like this:
```js
    services: ['sauce'],
    /**
     * set more capabilities
     */
    capabilities: [
    {
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 10'
    }
```
8. Run the tests `cd webdriverio && npm test` 


