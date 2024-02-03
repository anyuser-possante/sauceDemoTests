/// <reference types="Cypress" />

describe('Login', () => {
    it('Fail', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('input#user-name').type('standard_us');
      cy.get('input#password').type('secret_sau');
      cy.get('input#login-button').click();
      cy.get('h3').should('contain', 'Username and password do not match any user in this service')
    });

    it('Pass', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('input#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('input#login-button').click();
        cy.get('.title').should('contain', 'Products');
      });
  });
  