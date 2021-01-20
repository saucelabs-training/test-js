describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url('https://react-redux.realworld.io/#/login');

        $('[type="email"]').setValue('testjssummit@gmail.com');
        $('[type="password"]').setValue('password');
        $('button[type="submit"]').click(); 

        expect($('=testjssummit')).toBeExisting();
    });
});

