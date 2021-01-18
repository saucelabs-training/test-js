describe('Login scenarios', () => {
    test('Good credentials pass', async () => {
		await page.goto('https://react-redux.realworld.io/#/login');

		const username = await page.$('[type="email"]')
		await username.type('testjssummit@gmail.com')

		const password = await page.$('[type="password"]')
		await password.type('password')

		const btn = await page.$('button[type="submit"]')
		await btn.click()

		await page.waitForSelector('[href="#@testjssummit"]')
		const usernameLink = await page.$('[href="#@testjssummit"]')
		expect(await (await usernameLink.getProperty('textContent')).jsonValue())
			.toBe('testjssummit')
	})
})