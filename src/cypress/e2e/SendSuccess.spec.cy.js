import useData from "../fixtures/user-Data.json"
import loginPage from "../pages/loginPage"
import userPage from "../pages/userPage"

const LoginPage = new loginPage()
const Userpage =  new userPage()

describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
      
        LoginPage.AccessLoginPage()
        LoginPage.LoginwithUser(useData.userSucess.username,useData.userSucess.password)
        Userpage.TransactionSuccess()

    });
  });