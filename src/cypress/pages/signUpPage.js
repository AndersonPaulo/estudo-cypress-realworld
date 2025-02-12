class signUp{

        selectorsList(){

            const selectors ={
                firstName:"#firstName",
                lastName:"#lastName",
                userName:"#username",
                password:"#password",
                passwordConfirm:"#confirmPassword",
                submitButton:"[data-test='signup']"
            }
            return selectors
        }

        signUpButtonSucess(FirstName,NastName,UserName,Password,PasswordConfirm){
            cy.get(this.selectorsList().submitButton).click()
            cy.get(this.selectorsList().firstName).type(FirstName)
            cy.get(this.selectorsList().lastName).type(NastName)
            cy.get(this.selectorsList().userName).type(UserName)
            cy.get(this.selectorsList().password).type(Password)
            cy.get(this.selectorsList().passwordConfirm).type(PasswordConfirm)
            cy.get('[data-test="signup-submit"]').click()
        }
        signUpButtonFail(FirstName,NastName,UserName,Password,PasswordConfirm){
            cy.get(this.selectorsList().submitButton).click()
            cy.get(this.selectorsList().firstName).type(FirstName)
            cy.get(this.selectorsList().lastName).type(NastName)
            cy.get(this.selectorsList().userName).type(UserName)
            cy.get(this.selectorsList().password).type(Password)
            cy.get(this.selectorsList().passwordConfirm).type(PasswordConfirm)
            cy.get('#confirmPassword-helper-text')
            
        }

}
export default signUp