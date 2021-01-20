# Setup

In this chapter we will go through setting up your framework in an empty project. At this point you should have decided which framework you would like to use. Start by creating a directory somewhere in your file system:

```bash
$ cd /tmp
$ mkdir testjsworkshop
$ cd testjsworkshop
```

Then follow the chapter of the framework you would like to use. The objective of this chapter is to:

1. Have a simple test suite setup that runs a test to
1. open [https://react-redux.realworld.io/#/login](https://react-redux.realworld.io/#/login)
1. login with username: `testjssummit@gmail.com` and password: `password`
1. has a check that login was successful

## WebdriverIO

WebdriverIO provides a testrunner that helps you with various things that you need in your day to day automation life. It provides you with useful reporters, services and other neat features that will make your life easier. In this chapter we gonna port our current Node.js automation script into a test suite that is using the testrunner. The objectives are as follow:

1. Setup a `package.json`
1. Install the WebdriverIO CLI
1. Run the configuration wizard with default values
1. Run a test with given setup

The WDIO testrunner allows you to scale up your automation tests. It takes on a lot of work that you would need to setup up manually. The features and advantages of it are the following:

- runs test in a parallel automatically
- creates and tears down sessions for you
- allows to run commands synchronously
- comes with a lot plugins written by core members and 3rd party developers
- handles log management
- and many more

To get up and running with the testrunner you need to install a new package called `@wdio/cli`:

```sh
$ npm i --save-dev @wdio/cli
```

This will install the CLI interface that you can use to run your tests with. Instead of running the `node` command directly on a file you are now using the new installed cli tool called `wdio` to run your tests. If you start with `wdio` in a new project, it makes sense to run the WDIO setup wizard to generate a config file. For that run:

```sh
$ npx wdio config
```

You are being asked a bunch of questions that you can answer as follows:

> Where is your automation backend located?

As we are getting started we want to run our test on your local machine. We will integrate SauceLabs in a later chapter.

> Which framework do you want to use?

You can decide any framework you want here as their way of working is similar. However [Mocha](https://mochajs.org/) is the most popular one though.

> Do you want to run WebdriverIO commands synchronous or asynchronous?

Select `synchronous` here. If you know how to handle promises you can also choose `asynchronous`, however it comes with some disadvantages (e.g. chaining commands) that make look more verbose.

> Where are your test specs located?

Just hit enter and use the suggested location.

> Do you want WebdriverIO to autogenerate some test files?

Let's have the configuration wizard create some example files for us so we can test our setup right away.

> Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)?

We will visit page objects in a later chapter, so let's go with "No" here.

> Are you using a compiler?

If you like to use TypeScript or Babel pick one of them. Make sure you visit the docs for [Babel](https://webdriver.io/docs/babel.html) or [TypeScript](https://webdriver.io/docs/typescript.html) to setup the necessary additional packages afterwards.

> Which reporter do you want to use?

Select `spec` reporter here. It is the common most used reporter.

> Do you want to add a service to your test setup?

Hit enter without any selection as we want to add service integrations later on.

> What is the base url?

The base url contains the root url of the application that we want to test. In this case it is our example Vue.js application: `http://todomvc.com/examples/vue/`.

After all these questions your config file is created. Next try to solve the objectives mention at the top of this file. If you port the `test.js` code to an actual test, make sure you follow the [Mocha](https://mochajs.org/) conventions of writing test files. Simple setup would like this:

```js
describe('My Vue.js Example Application', () => {
  it('should be able to complete ToDos', () => {
    // add your automation code here
    // ...
  })
})
```

After you've ported the tests you can run it using the wdio testrunner by calling:

```sh
$ npx wdio wdio.conf.js
```

Uh oh!? There is an error in the test. Can you spot and fix it? Update your test to fulfill the requirements mentioned in the beginning of the chapter.

## Cypress, Puppeteer, Playwright or Testcafe

> Note: This section is based on Sauce Testrunner Toolkit which is currently in Beta. You will learn how it works and what's coming. Afterwards, we will focus on implementing the rest of the workshop with WebdriverIO.

If you decide to run tests with Puppeteer, Playwright or Testcafe we recommend to use Sauce Labs Testrunner Toolkit to get up and running quickly. Here you can either All you need is:

```bash
$ npm install -g saucectl
```

__Note:__ this requires you to have [Docker](https://www.docker.com/) installed on your system. Feel free to just set up the framework locally.

`saucectl` is a testrunner toolkit developed at Sauce that allows you to run tests with these frameworks at scale on Sauce Labs or locally using container technologies like Docker. Once you have installed you can set up your suite via:

```bash
$ saucectl new
```

Then pick the framework. The toolkit will set up all necessary files. Afterwards you can go ahead a do a trial run via:

```bash
$ SAUCE_USERNAME=<your-username> SAUCE_ACCESS_KEY=<your key> saucectl run
```

> Note: if you don't have a Sauce Labs account yet, create one for free via `$ saucectl configure`

Lastly, run the setup and see your job being populate in the Sauce Labs dashboard. Now,update your test to fulfill the requirements mentioned in the beginning of the chapter.
