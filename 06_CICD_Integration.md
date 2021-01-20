# CI/CD Integration

To continously test our application after each commit, let's setup a CI/CD integration so our tests are run regularly. You can of course pick any CI/CD system of your choice, we will go ahead and use [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions) as it is free and comes with all we need for our little exercise. The objective of this chapter are the following:

- Setup a GitHub workflow to run your tests in GitHub
- Make it run your tests

Depending on your framework choice please go ahead with the following instructions:

## WebdriverIO

To run tests locally in a GitHub action we recommend to pick `ianwalter/puppeteer-container@4.0.0` which comes installed with all prerequisites you need to run Chrome in Docker. Based on that you can create a workflow that installs your project and kicks of your test.

## Cypress, Puppeteer, Playwright or Testcafe

If you have picked one of these tools you can leverage from `saucectl`'s preconfigured Docker setup. All you need to do is run the same setup steps like in the last chapter.