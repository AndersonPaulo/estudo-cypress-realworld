import useData from "../fixtures/user-Data.json"
import loginPage from "../pages/loginPage"
import userPage from "../pages/userPage"

const LoginPage = new loginPage()
const Userpage =  new userPage()


describe('Enviar dinheiro com saldo insuficiente', () => {

  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {

    LoginPage.AccessLoginPage()
    LoginPage.LoginwithUser(useData.userSucess.username,useData.userSucess.password)
    Userpage.TransactionFail()

  });

});