const articleResponse = require('../__fixtures__/articles.json')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        /**
         * spy for requests to tags endpoint
         */
        const tagsSpy = browser.mock('**/api/tags')

        /**
         * mock articles endpoint
         */
        const articleMock = browser.mock('**/api/articles**')
        articleMock.respond(articleResponse)

        /**
         * mock avatar image
         */
        const avatarMock = browser.mock(articleResponse.articles[0].author.image)
        avatarMock.respond('https://www.rspca.org.uk/webContent/staticImages/Infographics/CatHappy3.jpg')

        browser.url('https://react-redux.realworld.io')

        /**
         * validate that we see our 2 mocked entries
         */
        expect($$('.article-preview')).toBeElementsArrayOfSize({ eq: 2 })

        /**
         * validate that the tags endpoint was called once
         */
        expect(tagsSpy).toBeRequested()
    });
});


