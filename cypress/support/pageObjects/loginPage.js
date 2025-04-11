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
}

export default LoginPage