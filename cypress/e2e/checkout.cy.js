/// <reference types="Cypress" />

describe('Checkout', () => {
    it('Place order', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('input#user-name').type('standard_user');
        cy.get('input#password').type('secret_sauce');
        cy.get('input#login-button').click();
        cy.get('.inventory_list .inventory_item:nth-of-type(1) .inventory_item_name').click();
        cy.get('button#add-to-cart-sauce-labs-backpack').click()
        cy.get('div#shopping_cart_container > .shopping_cart_link').click()
        cy.get('button#checkout').click();
        cy.get('input#first-name').type('Test');
        cy.get('input#last-name').type('User');
        cy.get('input#postal-code').type('07302');
        cy.get('input#continue').click();
        cy.url().should('include', '/checkout-step-two');
        cy.get('.summary_info > div:nth-of-type(1)').should('exist');
        cy.get('.summary_info > div:nth-of-type(3)').should('exist');
        cy.get('button#finish').click();
        cy.get('div#checkout_complete_container > .complete-header').should('have.text', 'Thank you for your order!');



    });
}); 