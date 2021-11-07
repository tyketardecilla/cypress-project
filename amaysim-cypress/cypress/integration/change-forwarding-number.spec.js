/// <reference types="cypress" />

var phoneNumber = generatePhoneNumber()

it('Change Call Forwarding Number', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    //Log in
    cy.visit('https://accounts.amaysim.com.au/identity/login')

    cy.get('#username').type('0481862258')
    cy.get('#password').type('theHoff34')
    cy.get('#new_session > button').click()
    cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/services') //check that user is taken to the dashboard

    //Go to settings 
    cy.visit('https://www.amaysim.com.au/my-account/my-amaysim/settings')
    cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/settings') //check that user is taken to the settings page    
    
    //Edit Call Forwarding Number
    cy.get('#edit_settings_call_forwarding').click()
    cy.get('.confirm_popup_confirm', {timeout: 60000}).click()
    cy.get('#my_amaysim2_setting_call_divert_number').clear().type(phoneNumber + '{enter}')
    cy.contains('We have successfully updated your SIM settings.', {timeout: 60000})
    cy.get('.form_info_popup > :nth-child(4)', {timeout: 60000}).click()
    cy.get('#settings_call_forwarding > div > div > div.small-8.medium-8.large-10.columns > div.margin-top-half.row > div').should('contain.text', phoneNumber) //check that the forwarding number is updated
})


function generatePhoneNumber() {
    return '04' + Math.floor(Math.random() * 100000000);
}
