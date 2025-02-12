import useData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage'

const LoginPage = new  loginPage()

describe('Login com credenciais invalidas', () => {

  it('Login - Fail', () => {

    LoginPage.AccessLoginPage()
    LoginPage.LoginwithUser(useData.userFail.username,useData.userFail.password)
    LoginPage.checkAcessInvalid()

  })

})