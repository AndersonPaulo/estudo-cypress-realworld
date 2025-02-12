import useData from '../fixtures/user-Data.json'
import loginPage from '../pages/loginPage'

const LoginPage = new  loginPage()

describe('Login com sucesso', () => {

  it('Login - Success', () => {

    LoginPage.AccessLoginPage()
    LoginPage.LoginwithUser(useData.userSucess.username,useData.userSucess.password)

  })

  
})