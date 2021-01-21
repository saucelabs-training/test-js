module.exports = class ArticleElement {
    get author () {
        return this.rootElem.$('.article-meta .author').getText()
    }

    get date () {
        return this.rootElem.$('.article-meta .date').getText()
    }

    get title () {
        return this.rootElem.$('h1').getText()
    }

    get about () {
        return this.rootElem.$('p').getText()
    }

    constructor (rootElem) {
        this.rootElem = rootElem
    }
}