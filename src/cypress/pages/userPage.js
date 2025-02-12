class user{

    selectorsList(){

        const selector = {

            transactionButton: "[data-test='nav-top-new-transaction']",
            userList: ".css-1p823my-MuiListItem-root",
            amountSend: "#amount",
            addNote: "#transaction-create-description-input",
            playButton:"[data-test='transaction-create-submit-payment']",
            alertSuccessTransation:"[data-test='alert-bar-success']"

        }
        return selector
    }
    TransactionSuccess(){
        cy.get(this.selectorsList().transactionButton).click()
        cy.get(this.selectorsList().userList).eq(Math.floor(Math.random() * 4)).click()
        cy.get(this.selectorsList().amountSend).type("1")
        cy.get(this.selectorsList().addNote).type("Thanks")
        cy.get(this.selectorsList().playButton).click()
        cy.get(this.selectorsList().alertSuccessTransation)

    }
    TransactionFail(){
        cy.get(this.selectorsList().transactionButton).click()
        cy.get(this.selectorsList().userList).eq(Math.floor(Math.random() * 4)).click()
        cy.get(this.selectorsList().amountSend).type("1000000000")
        cy.get(this.selectorsList().addNote).type("Thanks")
        cy.get(this.selectorsList().playButton).click()
    }
}

export default user