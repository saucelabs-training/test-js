describe('React Redux app', () => {
    it('should look correct visually', () => {
        browser.url('https://react-redux.realworld.io/#/?_k=j18a5u');
        browser.execute('/*@visual.init*/', 'React Redux');
        browser.execute('/*@visual.snapshot*/', 'Global Feed');

        browser.url('https://react-redux.realworld.io/#/login?_k=ayt11a');
        browser.execute('/*@visual.snapshot*/', 'Sign In');

        browser.url('https://react-redux.realworld.io/#/login?_k=ayt11a');
        browser.execute('/*@visual.snapshot*/', 'Sign Up');
    });
});