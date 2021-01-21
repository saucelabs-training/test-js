const Page = require('./main.page')

class EditorPage extends Page {
    get title () { return $('input[placeholder="Article Title"]') }
    get about () { return $('input[placeholder="What\'s this article about?"]') }
    get text () { return $('textarea[placeholder="Write your article (in markdown)"]') }
    get tags () { return $('input[placeholder="Enter tags"]') }
    get submitBtn() { return $('button=Publish Article') }

    open () {
        super.open('editor')
    }

    publish (title, about, text, tags) {
        this.title.setValue(title)
        this.about.setValue(about)
        this.text.setValue(text)
        this.tags.setValue(tags.join(', '))
        this.submitBtn.click()
    }
}

module.exports = new EditorPage()