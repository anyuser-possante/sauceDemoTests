/// <reference types="Cypress" />

describe('PDP', () => {
    it('Add to cart from PDP', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('input#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('input#login-button').click();
        cy.get('.inventory_list .inventory_item:nth-of-type(1) .inventory_item_name').click();
        cy.get('button#add-to-cart-sauce-labs-backpack').click()
        cy.get('div#shopping_cart_container > .shopping_cart_link').click()
        cy.url().should('include', '/cart');

    });
});