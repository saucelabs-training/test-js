const Page = require('./main.page')

class LoginPage extends Page {
    get email() { return $('input[type="email"]') }
    get password() { return $('input[type="password"]') }
    get submitBtn() { return $('form button[type="submit"]') }

    open () {
        super.open('login')
    }

    login (email, password) {
        this.email.setValue(email)
        this.password.setValue(password)
        this.submitBtn.click()

        browser.waitUntil(
            () => !browser.getUrl().includes('login'))
    }
}

module.exports = new LoginPage()