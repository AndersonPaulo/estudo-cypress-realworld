class LoginPage{

    selectorsList(){

        const selectors ={

            usernameField:"#username",
            passwordField:"#password",
            loginButton:"[data-test='signin-submit']",
            wrongCredencialAlert: ".MuiAlert-message"
        }
        return selectors
    }
    LoginwithUser(username,password){

        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    AccessLoginPage(){
        cy.visit('/signin')
    }
    checkAcessInvalid(){
        cy.get(this.selectorsList().wrongCredencialAlert)
    }
}

export default LoginPage