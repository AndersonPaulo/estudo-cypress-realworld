import useData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage'

const LoginPage = new  loginPage()

describe('Visualizar histórico de transações com sucesso', () => {

    it('Deve exibir o histórico de transações de um usuário corretamente', () => {

        LoginPage.AccessLoginPage()
        LoginPage.LoginwithUser(useData.userSucess.username,useData.userSucess.password)
        cy.get("[data-test='transaction-list']")
        
    });
  });