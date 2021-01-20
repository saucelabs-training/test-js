# Add Reporters

Congratulation for successfully creating your first WebdriverIO test suite. Now as we move forward we want to make use of the diverse WebdriverIO ecosystem and add some more reporters to our test suite. The objectives are:

2. Add the [Allure](https://webdriver.io/docs/allure-reporter.html) reporter to the list of reporters
3. Use the Allure CLI to generate the Allure report in the `onComplete` hook
4. Report wdio and Chromedriver logs into a `./logs` directory instead of stdout

A very popular plugin is the [`@wdio/allure-reporter`](https://www.npmjs.com/package/@wdio/allure-reporter) which is a reporter that generates `.xml` files that can be converted into an HTML page. In order to generate the html you need to use [Allure command line tool](https://www.npmjs.com/package/allure-commandline).

If you setup all the things successfully you should see an `allure-report` directory with a bunch of static files in there which you can serve via:

```sh
$ cd ./allure-report
$ npm i -g http-server
$ http-server -p 8080
$ open http://127.0.0.1:8080
```
