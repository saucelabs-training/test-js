const Page = require('./main.page')
const Article = require('./article.element')

class FeedPage extends Page {
    get navItems () { return $$('.navbar .nav-item') }
    get username () {
        if (!this.isLoggedIn()) {
            throw new Error('not logged in')
        }

        return this.navItems.pop()
    }
    get articles () {
        /**
         * first wait until any article show up
         */
        $('.article-preview').waitForExist()

        /**
         * fetch all articles and return a custom article page object element
         */
        return $$('.article-preview')
            .map((elem) => new Article(elem))
    }

    isLoggedIn () {
        if (this.navItems.pop().getText() === 'Sign Up') {
            return false
        }
        return true
    }

    open (isGlobalFeed) {
        super.open()
        if (isGlobalFeed) {
            $('=Global Feed').click()
        }
    }
}

module.exports = new FeedPage()