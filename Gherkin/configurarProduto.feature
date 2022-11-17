            #language: pt

            Funcionalidade: Configurar Produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

            Esquema do Cenário: Seleções de cores, tamanhos e quantidade devem ser obrigatórios
            Dado que eu acesse o sistema EBAC-SHOP
            Quando eu selecionar um produto
            E escolher a cor <cor>
            E escolher o tamanho <tamanho>
            E escolher a quantidade <quantidade>
            Então o sistema deve permitir adicionar no carrinho

            Exemplos:
            | cor      | tamanho | quantidade |
            | Vermelho | P       | 2          |
            | Preto    | M       | 3          |
            | Branco   | G       | 5          |

            Esquema do Cenário: Deve permitir apenas 10 produtos por venda
            Dado que eu acesse o sistema EBAC-SHOP
            Quando eu selecionar <qtd> produtos
            E clicar para inserir no carrinho
            Então o sistema deve exibir a mensagem <mensagem>

            Exemplos:
            | qtd | mensagem                           |
            | 5   | "Produtos adicionados no carrinho" |
            | 10  | "Produtos adicionados no carrinho" |
            | 11  | "Quantidade acima no permitido!"   |

            Cenário: Botão Limpar
            Dado que eu acesse o sistema EBAC-SHOP
            Quando eu clicar no botão Limpar
            Então todos os campos devem ser limpados