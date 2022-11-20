/// <reference types="cypress" />

describe('Testes de Cupons', () => {
    
    before(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/rest-api/docs/')
        cy.get('.auth-wrapper > .btn').click()
        cy.get(':nth-child(3) > section > input').type('admin_ebac')
        cy.get(':nth-child(4) > section > input').type('@admin!&b@c!2022')
        cy.get('.auth-btn-wrapper > .authorize')
        cy.get('.btn-done').click()
    });

    it('Deve listar todos os cupons cadastrados', () => {
        cy.request({
            method: 'GET',
            url: 'coupons',
            headers: {
                authorization: 'YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })
    });

    it('Deve listar cupom por ID', () => {
        cy.request({
            method: 'GET',
            url: 'coupons/8148',
            headers: {
                authorization: 'YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
            }
        }).should((response) => {
            cy.log(response)
            expect(response.status).to.equal(200)
        })
    });

    it('Deve cadastrar um cupom com sucesso', () => {
        
        cy.cadastrarCupom('Desconto10', '10.00', 'percent', 'Desconto de 10%')
        .then((response) => {
             expect(response.status).to.equal(200)
        }) 
  });
    
});
