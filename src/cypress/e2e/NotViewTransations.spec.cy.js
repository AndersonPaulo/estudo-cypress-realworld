import useData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage'

const LoginPage = new  loginPage()




describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      // 
      
      LoginPage.AccessLoginPage()
      LoginPage.LoginwithUser("Silver","s3cret")
      cy.get("[data-test='nav-personal-tab']").click()
      cy.get("[data-test='transaction-list-empty-create-transaction-button']")
    });
  });