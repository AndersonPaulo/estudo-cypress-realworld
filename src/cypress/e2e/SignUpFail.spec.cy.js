import loginPage from '../pages/loginPage'
import signUpPage from '../pages/signUpPage'
import useData from '../fixtures/user-Data.json'

const LoginPage = new loginPage()
const SignUpPage =new signUpPage() 


describe('Registro de novo usuario com Falha', () => {

  it('Registro - Fail', () => {
  
    LoginPage.AccessLoginPage()
    SignUpPage.signUpButtonFail(useData.registerNewUserFail.firstName,useData.registerNewUserFail.lastName,useData.registerNewUserFail.userName,useData.registerNewUserFail.password,useData.registerNewUserFail.passwordConfirm)
    
  })

})