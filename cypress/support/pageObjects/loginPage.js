class LoginPage{

    typeUsername(username){
        cy.get('#user').type(username)
    }

    typePassword(password){
        cy.get('#pass').type(password)
    }

    clickLogin(){
        cy.get("button[type='submit']").click()
    }

    verifyDashboard(){
        cy.url().should('include', "/dashboard")
    }

    typeTextbox(text){
        cy.get('#idtextbox1').type(text)
    }

    clickRadiobutton(){
        cy.get("#idradiobutton1").click()
    }
}

export default LoginPage