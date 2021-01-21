describe('The page', () => {
    it('should look correct visually', () => {
        browser.url('https://react-redux.realworld.io');
        //It's a really great idea to always pause after a 
        //page load to make sure it fully renders for a visual snapshot
        browser.pause(10000);
        browser.execute('/*@visual.init*/', 'React Redux');
        browser.execute('/*@visual.snapshot*/', 'Global Feed');

        browser.url('https://react-redux.realworld.io/#/login');
        browser.pause(10000);
        browser.execute('/*@visual.snapshot*/', 'Sign In');

        browser.url('https://react-redux.realworld.io/#/register');
        browser.pause(10000);
        browser.execute('/*@visual.snapshot*/', 'Sign Up');
    });
});