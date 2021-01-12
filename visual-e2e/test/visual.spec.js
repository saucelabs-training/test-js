describe('Home page', () => {
    it('should look correct visually', () => {
        browser.url('https://react-redux.realworld.io/#/?_k=j18a5u');
        browser.execute('/*@visual.init*/', 'React Redux');
        browser.execute('/*@visual.snapshot*/', 'Global Feed');
    });
});