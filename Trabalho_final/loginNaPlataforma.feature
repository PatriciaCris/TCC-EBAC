            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login na plataforma
            Para visualizar meus pedidos


            Cenário: Senha inválida
            Dado que eu acesse o sistema EBAC-SHOP na seção de login
            Quando eu inserir um login válido
            E uma senha inválida
            Então uma mensagem de erro será exibida

            Esquema do Cenário: Login por e-mail, login ou cpf
            Dado que eu acesse o sistema EBAC-SHOP na seção de login
            Quando eu inserir o login <login>
            E a senha <senha>
            Então deve ser permitido acesso ao sistema

            | login              | senha    |
            | patricia@gmail.com | Eb@c2022 |
            | Patricia           | Eb@c2022 |
            | 123.456.789-01     | Eb@c2022 |