/// <reference types="cypress" />

describe('Funcionalidade Adicionar produto ao carrinho', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve adicionar primeiro produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
        .contains('Abominable Hoodie').click()

        cy.get('.button-variable-item-L').click()

        cy.get('.button-variable-item-Blue').click()

        cy.get('.input-text').clear().type(quantidade)

        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items')
        .should('contain', quantidade)

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar segundo produto ao carrinho', () => {

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(1) > a').click()

        cy.get('[class="product-block grid"]')
        .contains('Rustic Granite Hat').click()

        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', '“Rustic Granite Hat” foi adicionado no seu carrinho.')
    });
    
    it('Deve adicionar terceiro produto ao carrinho', () => {

        cy.get('.tbay-woocommerce-breadcrumb > :nth-child(1) > a').click()

        cy.get('[class="product-block grid"]')
        .contains('Gorgeous Steel Keyboard').click()

        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain', '“Gorgeous Steel Keyboard” foi adicionado no seu carrinho.')
    });
})