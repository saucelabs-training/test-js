# Introduction to Browser Automation

Browser automation is almost as old as the internet and there have been quite some interesting development and influences over the years. Especially with the web changing from how it was 15 years ago to what it is today. So let's recap first what has happened so far and how we got where we are rigth now.

It all started with someone called [Jason Huggins](https://twitter.com/hugs) having the need to test an expense tool at Thoughtworks on Internet Explorer and Firefox. Back in the days there have been no automation tool around to achieve this task, so Jason build one. That tool was called Selenium and is probably known to all of you today. A year later another actor jumps into the scene and develops a similar tool to automate a browser. That person was [Simon Steward](https://twitter.com/shs96) and his tool was called WebDriver. Both tools gained more and more popularity over the years up to a point where Jason thought it would be a good idea to make business out of it. So he founded Sauce Labs and continued the development of Selenium. It was apparent that both tools work great but have their own limitations in certain areas. Selenium which was running in the browser at that time had problems with cross origin policies and certain automations around the browser while WebDriver had other limitations when it cam to automation of certain elements on the page. Someday, Jason and Simon got together and decided to merhe both tools to Selenium-WebDriver to overcome each others limiations and provide the best possible experience possible.

The growing interest in browser automation has influenced some folks to initiate a working group at the W3C to develop a web standard around it. The goal was to ensure that an automation command in one browser would have the same effect as in others to ensure true cross platform testing capabilities without flakiness. Therefor a web standard was drafted with the requirements in mind people had in mind when it comes to browser testing in 2012. This created a lot of convidence and traction in the ecosystem resulting in a lot of tools being created, from Protractor to WebdriverIO and projects like Appium that bring the same principle of browser automation into the mobile space.

Between 2013 and 2016 an interesting development has happened: a lot of new frontend frameworks started to gain popularity and has changed the way developers have build and delivered web applications. What used to be a web server delivering static web pages has now become a dynamic loaded single page application (SPA) developed by a framework like Angular, React or Vue.js. This also started to change a lot requirements people had towards browser automation and frontend application testing. Moving forward, frontend engineers would only be interested in the development of a frontend application and would be less concerned about a backend that now is being developed by a different team. This created interested and demand for new automation capabilities, e.g. mocking and stubbing network requests/responses or emulating a mobile web browser. A lot of these new requirements were not really addressed by the browser automation standard that was developed in the meantime. That said, new companies like Cypress and new projects such as Puppeteer, Testcafe or Playwright were created that would try to address these use cases.

Eventually the working group at W3C finishes writing the web standard for browser automation called WebDriver in 2018. It became a recommended standard and was supported by all major browser vendors including Chrome, Firefox, Safari and Internet Explorer. That said, the design of the standard was already about to be outdated given the usecases people had when developing tests for modern web applications written in frameworks such as React. With that in mind, the working group started a new initiative to update their protocol and address these use cases.

## Types of Tools

Today we can pretty much group the tools into two different buckets: the conventional tools, such as Selenium, WebdriverIO and Nightwatch and the newer "Non-Standard" tools like Cypress, Testcafe, Puppeteer or Playwright. Both of these groups have interesting characteristics.

### Conventional Tools

Conventional tools are all based on the WebDriver protocol nad therefor provide "true" cross browser automation and some even mobile automation through tools like Appium. With that however they are also rather limited in their capabilities for browser automation as they are based on the protocol that was designed before React, Vue.js or Svelte were a thing. All of them however have open governed open source project with a rather long history and large user communities.

### Non-Standard Tools

On the other side we have the so called "Non-Standard" tools. They all have their own ways to automate the browser with their own set of advantages and disadvantages over each other. These custom approahces are either run automation in the browser through the Web-API or use browser APIs for automation. That makes them all limited to certain browser types but allow access to wider range of automation capabilities that is usually more attracted to frontend developers.

### Automation Strategies by Tool

So if we look at the tools we have, we can sort everyone to a certain automation strategy:

- Automation through Web-APIs: Cypress, Testcafe
- Automation through Browser-APIs: Puppeteer, Playwright
- Automation through WebDriver: Selenium, WebdriverIO

## Ways to automate a browser

Today there are generally 3 common practices how to automate a browser. Through executing JavaScript in the execution environment of the application under test, through Browser-APIs or through the WebDriver protocol.

### 1st Generation: Automation through Web-APIs

Even though more novel tools like Cypress or Testcafe are using this approach, automating a browser by executing some custom JavaScript has been around since the inception of Selenium. In fact for some automation commands like evaluating the visibility state of an element Selenium still invokes custom JavaScript in the browser as defining "visible" in the context of a web standard is almost impossible to do. The advantage of this approach is that you have full access to you web application under test and its environment. However you can only do as much as the Web-APIs allow you to do. While it is in most cases sufficient to allow you to run most of the automation steps you would need, frameworks like Cypress or Testcafe have to use some workarounds to e.g. execute commands for taking screenshots or modifying certain browser properties (e.g. resizing the browser window).

When projects rely on this approach they usually inject their custom JavaScript through 2 methods: iFrames or proxies. In case of Cypress a test runner is loaded in the browser with all logic needed to run the test. The application under test is then loaded in an iframe and therefor accessible by the test runner. Both web application can now exchange messages or invoke JavaScript to trigger automation commands.

When using proxies as in the case of Testcafe, the testrunner proxies all sources of the application under test through a server to modify the response HTML file and to inject necessary JavaScript that allows the test runner to set up a connection between the your application and itself.

### 2nd Generation: Automation through Browser-APIs

Using browser APIs is the second generation of automation techniques as it has been used originally by the original WebDriver project. Back in the days the it abused browser extensions to trigger events in the browser or in case of the internet explorer the COM interface was used to trigger other automation commands. Today, browser APIs such as the Chrome DevTools protocols have become very popular and powerful and provide next to stellar debugging capabilities also a lot of automation primitives that can be used to test a web application.

As every browser engine slightly differentiates from each other so does every browser API. For example, even though Blink, the browser engine of Chrome is a fork of WebKit which runs Safari, both browser APIs are clearly different in detail and in case of Safari not even accessible by the user. This makes automating more than just one browser engine almost impossible. Today we see that browser vendors join forces and work on more compliant browser APIs which the reason why Puppeteer started to support automation in Firefox. On the other side we see former browser developers that ship their automation tool (Playwright) with a custom patch to the original browser to enable the capabilities we have in one browser also in other browser engines.

### 3rd Generation: WebDriver Protocol

The WebDriver protocol combines the previous approaches into one and ensures as a web standard to execute its commands across all browser in the same fashion. Being a web standard, WebDriver commands are developed by browser vendors and are tested in the [web platform test suite](https://wpt.fyi/about) to ensure they work cross browser.

Automating a browser through the WebDriver protocol is like managing a factory during Covid-19 times: by working from home. However in this case you have no telephone or internet to make any commands in your factory, so you need an assistant to do that for you. That assistant now can pick a command from you, then goes to the factory to execute it and come back. This roundtrip can take a while which is why Selenium based tools are often called slow as a command, especially when executed through a cloud provider like Sauce Labs, can take a while to be run.

While a single transaction might be slow it however can be very scaleable. With this approach you can automate up to thousands of factories with thousands of assistants responsible for every single factory. In addition to that every factory can be a different browser and can you be ensured that your command can still be executed no matter as your assistant knows how translate your command into the appropiate command that particular browser engine understands. You even can have mobile assistants that speak iOS or Android and allow you to automate mobile factories.

## Which Automation Framework to pick?

"It depends!" 😉

Every framework comes with its limiation and advantages and you should always consider testing a couple of them to experience what it means to build up a test suite for your project. Here are some considerations you might want to consider when weighing pros and cons between one or the other tool:

### Automation Capabilities

Analyse the feature set of every tool and check out which you definitely need or which are nice to have. If you definitely need cross browser testing or running the same test on mobile you can already rule out Non-Standard tools and pick Selenium or WebdriverIO. If you enjoy debugging websites during test you will probably be better of Cypress, Puppeteer or Playwright.

<!-- ToDo(Christian): add more -->