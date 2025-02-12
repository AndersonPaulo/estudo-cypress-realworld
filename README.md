# RealWorld App - Testes com Cypress

Este repositório contém testes automatizados escritos em **Cypress** para validar funcionalidades essenciais do **RealWorld App**.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

## Testes Realizados

Os seguintes cenários foram testados:

### Login

✅ **Login com sucesso**\
📌 Verifica se um usuário consegue acessar a aplicação com credenciais válidas.

❌ **Login com falha**\
📌 Testa o comportamento do sistema ao inserir credenciais inválidas.

### Registro

✅ **Registro com sucesso**\
📌 Garante que novos usuários podem se cadastrar corretamente.

❌ **Registro com falha**\
📌 Testa se o sistema lida corretamente com erros no cadastro

## Como Executar os Testes

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Execute os testes no modo interativo:
   ```sh
   npx cypress open
   ```
   Ou rode os testes em modo headless:
   ```sh
   npx cypress run
   ```

