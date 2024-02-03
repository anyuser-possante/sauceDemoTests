/// <reference types="Cypress" />

describe('Inventory Page', () => {
    it('Access PDP', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('input#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('input#login-button').click();
        cy.get('.inventory_list .inventory_item:nth-of-type(1) .inventory_item_name').click();
        cy.get('.inventory_details_name.large_size').should('have.text', 'Sauce Labs Backpack');
    });   
  });
  