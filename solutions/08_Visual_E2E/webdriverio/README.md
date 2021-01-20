# Visual E2E Testing

## Getting Started

* Get Your Screener Account Here

* Run `npm init -y`

* Add the following dependencies to packages.json

```js
  "devDependencies": {
    "@wdio/cli": "^6.9.0",
    "@wdio/jasmine-framework": "^6.8.0",
    "@wdio/local-runner": "^6.9.0",
    "@wdio/mocha-framework": "^6.8.0",
    "@wdio/sauce-service": "^6.8.0",
    "@wdio/spec-reporter": "^6.8.1",
    "@wdio/sync": "^6.9.0",
    "chromedriver": "^87.0.0",
    "wdio-chromedriver-service": "^6.0.4"
  }
```
* `npm i`

* Create visual.spec.js that looks like this

```js
describe('Home page', () => {
    it('should look correct visually', () => {
        browser.url('https://react-redux.realworld.io/#/?_k=j18a5u');
        browser.execute('/*@visual.init*/', 'React Redux');
        browser.execute('/*@visual.snapshot*/', 'Global Feed');
    });
});
```

* Create a visual.conf.js that looks like this

```js
const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};
const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'React Redux',
    scrollAndStitchScreenshots: true
};

exports.config = {
    // ====================
    // More information about the configuration is found here https://webdriver.io/docs/configurationfile.html
    // ====================
    runner: 'local',
    specs: [
        './test/**/*.spec.js'
    ],
    maxInstances: 100,
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    services: [],

    //Screener Configuration
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    region: process.env.REGION || 'us',
    //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
    //Desktop B 20%: https://www.w3schools.com/browsers/browsers_display.asp
    //iphone X
    //iphone 6-8
    //Galaxy S8+
    capabilities: [    
        //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
        {
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            'sauce:options': {
                ...sauceOptions,
            },
            'sauce:visual': {
                ...visualOptions,
                viewportSize: '1280x1024'
            }
        }
    ]
};
```

* Point the scripts to the config in package.json

```js
  "scripts": {
    "test": "npx wdio test/visual.conf.js"
  },
```

* `npm test`