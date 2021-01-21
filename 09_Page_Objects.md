# Page Objects

After getting our basic setup for local and cloud based testing ready we can now look at our tests and scale those up. The objective in this chapter is to use e2e best practices to run a big test suite with clean re-usable tests.

1. Transform your test to make use of PageObjects
2. Move functionality out into the page objects and clean up the tests
3. Add two more tests that
  3.1. create a new article
  3.2. check certain article on the frontpage

A full documentation on how page objects can be written with WebdriverIO can be found in the [docs](https://webdriver.io/docs/pageobjects.html). The goal of this excercise is to make your initial test look as follows:

```js
const LoginPage = require('./pageobjects/login.page')
const FeedPage = require('./pageobjects/feed.page')
const EditorPage = require('./pageobjects/editor.page')

describe('My Example App', () => {
    it('should be able to login', () => {
        LoginPage.open()
        LoginPage.login('testjssummit@gmail.com', 'password')
        expect(FeedPage.username).toHaveText('testjssummit')
    })

    it('should be able to create an article', () => {
        EditorPage.open()
        EditorPage.publish(
            'Article Title',
            'What\'s this article about?',
            'Write your article (in markdown)',
            ['tag1', 'tag2']
        )
        expect(FeedPage.articles.map((article) => article.title))
            .toContain('Article Title')
    })
})
```