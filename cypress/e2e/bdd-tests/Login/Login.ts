/// <reference types='cypress' />

const { Given, When, Then} = require("cypress-cucumber-preprocessor/steps")
Given('I navigate to automation exercise website', function() {
cy.visit('https://automationexercise.com/');
})

When('I enter login credentials', function() {
cy.get('a[href=”/login”]').click();
cy.contains('Login to your account').should('be.visible');
cy.get('input[data-qa=”login-email”]').type('example1@test.com');
cy.get('input[data-qa=”login-password”]').type('foobar');
cy.get('button[data-qa=”login-button”]').click();
})

Then('I should be logged in', function() {
cy.contains(' Logged in as ').should('be.visible');
})