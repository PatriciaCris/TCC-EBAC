/// <reference types="cypress" />

describe('Funcionalidade Adicionar produto ao carrinho', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve adicionar primeiro produto ao carrinho', () => {
        let quantidade = 3

        cy.addProdutoTipo1('Abominable Hoodie', '.button-variable-item-L', '.button-variable-item-Blue', quantidade)

        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar segundo produto ao carrinho', () => {

        cy.addProdutoTipo2('Rustic Granite Hat')

        cy.get('.woocommerce-message').should('contain', '“Rustic Granite Hat” foi adicionado no seu carrinho.')
    });
    
    it('Deve adicionar terceiro produto ao carrinho', () => {

        cy.addProdutoTipo2('Gorgeous Steel Keyboard')

        cy.get('.woocommerce-message').should('contain', '“Gorgeous Steel Keyboard” foi adicionado no seu carrinho.')
    });
})