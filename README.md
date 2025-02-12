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
📌 Testa se o sistema lida corretamente com erros no cadastro.

### Transferências

✅ **Transferência com saldo positivo**\
📌 Testa se um usuário consegue realizar uma transferência com saldo disponível.

❌ **Transferência com saldo negativo**\
📌 Foi identificado um erro onde, mesmo sem saldo disponível, o aplicativo informa que a transferência foi enviada.

### Histórico de Transferências

✅ **Verificação do histórico de transferências**\
📌 O teste verifica se as transferências realizadas aparecem no histórico corretamente.

❌ **Histórico sem transações**\
📌 O teste deveria validar se a mensagem "Sem histórico de transações" aparece quando não há registros, contudo, os desenvolvedores não deixaram nenhum pré-cadastro sem histórico de movimentação. Mesmo ao criar um novo usuário, ele já vinha com um histórico pré-existente.


## Como Executar os Testes

1. Clone este repositório:
   ```sh
   git clone https://github.com/AndersonPaulo/estudo-cypress-realworld.git
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

