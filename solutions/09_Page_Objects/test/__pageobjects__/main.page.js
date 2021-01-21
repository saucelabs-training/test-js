// Page.js
module.exports = class Page {
    constructor() {
        this.hostname = 'https://react-redux.realworld.io/'
    }

    open(path) {
        browser.url(`${this.hostname}${path ? `#/${path}` : ''}`)
    }
}