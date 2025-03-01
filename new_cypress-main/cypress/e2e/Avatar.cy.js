describe('Покупка Аватара', function () {
    it('Покупка Аватара', function () {
        cy.visit('https://pokemonbattle.ru/login');// зашли на сайт покемонов
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // нашли поле логин и ввели правильный логин
        cy.get('#password').type('USER_PASSWORD');// нашли поле пароль и ввели правильный пароль
        cy.get('.auth__button').click(); // нашел кнопку войти и нажал на нее
        cy.wait(2000);
        cy.get('.header__container > .header__id').click();//  личный кабинет
        cy.get('[href="/shop"]').click();// нашел кнопку "смена аватара" и кликаю на него
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('2201 3820 0000 0021'); // навел на поле карта и ввел номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25'); // навел на поле  срок карты и нажал на него
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//навел на код карты и ввел
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('alexander kovalev');// нашел поле ввда имени карты и ввел имя
        cy.get('.pay-btn').click();// нашел кнопку оплатить и нажал ее
        cy.get('#cardnumber').type('56456');// навел на окно подтверждения и ввел код
        cy.get('.payment__submit-button').click();// нашел окно отправитьи нажал на него
        cy.contains('Покупка прошла успешно').should('be.visible');// проверяем наличие и видимость сообщения о успешной покупке
    });
});