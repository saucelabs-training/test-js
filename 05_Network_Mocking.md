# Network Mocking

WebdriverIO, as oppose to Selenium, can not only automate browser through the [WebDriver](https://www.w3.org/TR/webdriver/) protocol but also using browser APIs, more specifically [Chrome DevTools](https://chromedevtools.github.io/devtools-protocol/). That allows to access automation capabilities that are usually not available when running test through WebDriver. One of these capabilities is mocking and stubbing of network requests. If you run a test locally WebdriverIO provides an API that allows to mock requests that have a certain pattern as well as inspect network requests made by your applications.

This becomes particularly useful when you don't want to deploy your whole infrastructure to run UI tests. With [some simple commands](https://webdriver.io/docs/api/browser/mock.html) you can replace your API calls with predefined responses to inspect the behavior of your application.

WebdriverIO allows 3 ways to modify a response:

- return a custom JSON object (for stubbing API request)
- replace web resource with a local file or
- redirect resource to a different url

In our [example application](https://react-redux.realworld.io/#/?_k=b84vnc) we see that the front page contains a list of random posts which would make it impossible for our test to have a reliable result as we never know who has posted what. In this chapter we make use of WebdriverIOs mocking capabilities to pre-set some custom articles for our testing purposes. The objectives are:

- find out which API request is responsible for fetching the articles and mock that request
- create a custom response for that endpoint that has 2 custom entries, the response object should have the following structure:
    ```ts
    {
        author: {
            bio: string
            following: boolean
            image: string
            username: string
        }
        body: string
        createdAt: string // e.g. 2021-01-21T13:36:46.634Z
        description: string
        favorited: boolean
        favoritesCount: number
        slug: string
        tagList: string[]
        title: string
        updatedAt: string // e.g. 2021-01-21T13:36:46.634Z
    }
    ```
- add an assertion that checks that only 2 articles got loaded in the page
- add an assertion using `expect-webdriverio` to ensure that the tags endpoint was [requested](https://webdriver.io/docs/api/expect-webdriverio.html#toberequested) by the browser at least once
- mock the avatar image of the author in one of your custom article and replace it with a cute cat picture 🐈

You will see that it will be very easy to mimic API responses or other kinds of requests so that you can bring your application in a state you need to run your UI tests encapsulated from other tests.