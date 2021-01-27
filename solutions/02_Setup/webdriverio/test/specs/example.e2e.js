describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url('/#/login');

        $('[type="email"]').setValue('testjssummit@gmail.com');
        $('[type="password"]').setValue('password');
        $('button[type="submit"]').click(); 

        expect($('=testjssummit')).toBeExisting();
    });
});

