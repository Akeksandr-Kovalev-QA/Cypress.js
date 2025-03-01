
describe('Проверка авторизации', function () {
    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru') // нашл поле логин, ввел правильный логин 
        cy.get('#pass').type('iLoveqastudio1') // нашл поле пароль, ввел верный пароль
        cy.get('#loginButton').click(); //нашл кнопку"Войти", нажал эту кнопку

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

    })

    it('автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт

        cy.get('#forgotEmailButton').click();// нашл кнопку забыли пароль и кликнул на нее
        cy.get('#mailForgot').type('german@dolnikov.ru')//  нашл поле логин и ввели его
        cy.get('#restoreEmailButton').click()// нашл поле отправить и кликнули на него

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')//  проверка, что после отправки логина  виден нужный тектс
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

    })
   
    it('Негативный кей авторизации "Правильный логин- неправильный пароль"', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт

        cy.get('#mail').type('german@dolnikov.ru') // нашел поле логин и  ввел правильный  логин 
        cy.get('#pass').type('iLoveqastudio') // нашел поле пароль и верный  не правильный пароль
        cy.get('#loginButton').click(); //  нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу нужный текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя  

    })

    it('Негативный кей авторизации "Не верный логин- правильный пароль"', function () {
        cy.visit('https://login.qa.studio/');// зашли на сайт

        cy.get('#mail').type('al.al.kovalew@.ru') // нашел поле логин и  ввел не правильный  логин
        cy.get('#pass').type('iLoveqastudio1') // нашл поле пароль, ввел верный пароль
        cy.get('#loginButton').click(); //  нашел кнопку войти и нажал на нее

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу нужный текст
        cy.get('#messageHeader').should('be.visible');// текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
       
})

it('Негативный кей Валидации "Логин с ошибкой без @"', function () {
    cy.visit('https://login.qa.studio/');// зашли на сайт

    cy.get('#mail').type('germandolnikov.ru') // нашел поле логин и  ввел логин без @
    cy.get('#pass').type('iLoveqastudio1') // нашл поле пароль, ввел верный пароль
    cy.get('#loginButton').click(); //  нашел кнопку войти и нажал на нее

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяю, что после авторизации вижу нужный текст
    cy.get('#messageHeader').should('be.visible');// текст виден пользователю
    
})

it('"Проверка на строчные буквы в логине"', function () {
    cy.visit('https://login.qa.studio/');// зашли на сайт

    
    cy.get('#mail').type('GerMan@Dolnikov.ru') // нашел поле логин и  ввел логин не строчными буквами
    cy.get('#pass').type('iLoveqastudio1') // нашл поле пароль, ввел верный пароль
    cy.get('#loginButton').click(); //  нашел кнопку войти и нажал на нее
    
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

})

})



