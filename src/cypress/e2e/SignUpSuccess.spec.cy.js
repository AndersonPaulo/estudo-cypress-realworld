import loginPage from '../pages/loginPage'
import signUpPage from '../pages/signUpPage'
import useData from '../fixtures/user-Data.json'

const LoginPage = new loginPage()
const SignUpPage =new signUpPage() 


describe('Registro de novo usuario com sucesso', () => {

  it('Registro - Success', () => {
  
    LoginPage.AccessLoginPage()
    SignUpPage.signUpButtonSucess(useData.registerNewUserSucess.firstName,useData.registerNewUserSucess.lastName,useData.registerNewUserSucess.userName,useData.registerNewUserSucess.password,useData.registerNewUserSucess.passwordConfirm)
    
  })

})