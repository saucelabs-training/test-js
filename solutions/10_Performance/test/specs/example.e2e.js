const LoginPage = require('../__pageobjects__/login.page')
const FeedPage = require('../__pageobjects__/feed.page')
const EditorPage = require('../__pageobjects__/editor.page')

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
        FeedPage.open(true)
        expect(FeedPage.articles.map((article) => article.title))
            .toContain('Article Title')
    })
})