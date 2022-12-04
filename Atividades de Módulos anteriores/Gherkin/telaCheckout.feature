#language: pt

Funcionalidade: Tela de cadastro - Checkout
Como cliente da EBAC-SHOP
Quero fazer concluir meu cadastro   
Para finalizar minha compra

Contexto:
Dado que realizei login no EBAC-SHOP pela primeira vez

Cenário: Preencher todos os campos obrigatórios
Quando preencher o checkout de cadastro
E preencher todos os campos obrigatórios
Então o sistema deve me permitir concluir meu cadastro

Cenário: Preencher email com formato inválido
Quando preencher o checkout com email com formato inválido
Então sistema deve exibir mensagem de erro "E-mail com formato inválido"

Cenário: Cadastrar com campos vazios
Quando preencher apenas alguns dos campos obrigatórios
E alguns campos obrigatórios ficarem vazios
Então sistema deve exibir mensagem de alerta "Preencha todos os campos obrigatórios!"