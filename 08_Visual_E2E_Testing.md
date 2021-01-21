# Visual E2E Testing

1. Configure your capabilities to look like this:

```js

const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};

const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'YOUR PROJECT NAME',
    scrollAndStitchScreenshots: true
};

    capabilities: [    
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
```
apiKey: get your Screener API Key from [here](https://screener.io/v2/account/api-key).

## Connect To Remote Hub

1. Add this to your wdio.conf.js

```js
exports.config = {
...
    //Screener Configuration
    hostname: 'hub.screener.io',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',
    region: process.env.REGION || 'us'
...
}
```

## Add Visual Commands
1. Add a "@visual.init" command to set the name for each test. Add this before capturing snapshots, only once per test session.
2. Add "@visual.snapshot" commands when you want to capture a visual snapshot; use this whenever you want a snapshot to be taken.

### WebDriverIO Example:

```js
it('should take snapshot', () => {
  browser.url('https://screener.io');
  browser.execute('/*@visual.init*/', 'My Visual Test');
  browser.execute('/*@visual.snapshot*/', 'Home');
});
```

## Run
Great, you're all set!

Now run your first test and view your initial results in the Screener Dashboard.

Note: your initial visual test will fail, and results will be labelled as "New"; Review and Accept them as the baseline

## Your Challenge
To add 4 more browser configurations to support the most popular desktop and mobile resolutions.

1. Add a capability for your visual test to run on the 2nd most popular desktop:
viewportSize: '1920x1080'
browserName: 'chrome'

2. Add a capability for your visual test to run on iPhone X mobile browser:
viewportSize: '375x812'
browserName: 'safari'
platformName: 'macOS 10.15'

3. Also, add iphone 6-8
viewportSize: '414x736'
browserName: 'safari'
platformName: 'macOS 10.15'

4. And Galaxy S8
viewportSize: '360x740'
browserName: 'chrome'