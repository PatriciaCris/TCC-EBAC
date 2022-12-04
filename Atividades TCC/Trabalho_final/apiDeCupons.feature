            #language: pt

            Funcionalidade: API de Cupons
            Como admin da EBAC-SHOP
            Quero criar um serviço de cupom
            Para poder listar e cadastrar os cupons

            Cenário: Buscar cupom por ID
            Dado que eu acesse a API de cupons
            Quando eu informar um ID de cupom no método GET
            Então as informações do cupom devem ser listadas

            Esquema do Cenário: Cadastrar cupom
            Dado que eu acesse a API de cupons
            E acesse o método POST
            E informe o código do cupom <codigo>
            E o valor <valor>
            E o tipo de desconto <desconto>
            E a descrição <descricao>
            Quando eu clicar para cadastrar
            Então o cupom deve ser cadastrado corretamente

            | codigo     | valor | desconto      | descricao           |
            | Ganhe10    | 10.00 | fixed_product | Cupom de teste      |
            | Desconto15 | 15.00 | fixed_product | Desconto de R$15.00 |
            | Mega50     | 50.00 | fixed_product | Desconto de R$50.00 |
            | Brinde2    | 2.00  | fixed_product | Desconto de R$2.00  |

            