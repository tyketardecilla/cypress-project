export class LoginPage {
    //Login Page URL
    navigate () {
        cy.visit('my-account/my-amaysim/services')
    }

    //Submit credentials
    login (username,password) {
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#new_session > button').click()
        //cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/services') //check that user is taken to the dashboard
    }
}