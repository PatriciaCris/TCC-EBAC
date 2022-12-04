            #language: pt

            Funcionalidade: Login na Plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

            Contexto:
            Dado que eu acesse o sistema EBAC--SHOP

            Esquema do Cenário: Login com dados válidos
            Quando eu digitar o <usuario>
            E a senha <senha>
            Então deve direcionar para a tela de checkout

            | usuario  | senha   |
            | patricia | pat123  |
            | cristina | cris123 |
            | maria    | mari123 |

            Esquema do Cenário: Login com dados inválidos
            Quando eu digitar o <usuario>
            E a senha <senha>
            Então deve exibir uma mensagem de alerta "Usuário ou senha inválidos"

            | usuario | senha          |
            | ninguem | asfnwegnrio    |
            | alguem  | ejhdfwejhfi    |
            | fulano  | clfewhnfewjlhn |

