import { Selector } from 'testcafe';

fixture `Getting Started`
	.page `https://react-redux.realworld.io/#/login`

const testName = 'testcafe test'

test(testName, async t => {
	await t
        .typeText('[type="email"]', 'testjssummit@gmail.com')
        .typeText('[type="password"]', 'password')
		.click('button[type="submit"]')
		.expect(Selector('[href="#@testjssummit"]').innerText).eql('testjssummit');
});