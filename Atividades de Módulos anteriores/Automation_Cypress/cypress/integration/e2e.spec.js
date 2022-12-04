/// <reference types="cypress" />
const dadosProduto = require('../fixtures/produto.json')
var faker = require('faker')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        //Selecionando Produtos
        cy.addProdutos(
            dadosProduto[0].produto, 
            dadosProduto[0].tamanho, 
            dadosProduto[0].cor, 
            dadosProduto[0].quantidade)

        cy.addProdutos(
            dadosProduto[1].produto, 
            dadosProduto[1].tamanho, 
            dadosProduto[1].cor, 
            dadosProduto[1].quantidade)

        cy.addProdutos(
            dadosProduto[2].produto, 
            dadosProduto[2].tamanho, 
            dadosProduto[2].cor, 
            dadosProduto[2].quantidade)

        //Adicionando produto diferente
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]').contains("Agasalho jhony quest").click()
        cy.get('.single_add_to_cart_button').click()


        //Indo para checkout
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        //Preenchendo campos do checkout com Faker
        let emailFaker = faker.internet.email()
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()

        cy.preencherCheckout(nomeFaker, sobrenomeFaker, 'Samsung', 'Brasil', 'Rua Pereira da Silva', '123', 'Manaus', 'Amazonas', '12345678', '988887777', emailFaker)

        //Termos e Finalização
        cy.get('#terms').check()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
});


})