/// <reference types="cypress" />

it('Log in to My Amaysim', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    
    cy.visit('https://accounts.amaysim.com.au/identity/login')

    cy.get('#username').type('0481862258')

    cy.get('#password').type('theHoff34')

    cy.get('#new_session > button').click()

    cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/services')
    
    
// })

// it('Manage "AS YOU GO" plan', () =>{
    cy.visit('https://www.amaysim.com.au/my-account/my-amaysim/settings')
    cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/settings')
    
//})

// it('Change Call Forwarding Number', () =>{
    cy.get('#edit_settings_call_forwarding').click()
    cy.get('.confirm_popup_confirm', {timeout: 60000}).click()
    cy.get('#my_amaysim2_setting_call_divert_number').clear().type('0412345678{enter}')
    //cy.get('#update_call_forwarding_form > div.row.border-top.padding-top.margin-top > div > input', {timeout: 60000}).click()
    cy.contains('We have successfully updated your SIM settings.', {timeout: 60000})
    cy.get('.form_info_popup > :nth-child(4)', {timeout: 60000}).click()
    //cy.get('#body-content > div.form_info_popup.reveal-modal.padding-none.open > a', {timeout: 60000}).click
    // cy.visit('https://www.amaysim.com.au/my-account/my-amaysim/settings')
    // cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/settings')
    cy.contains('Forward calls to 0412345678')
})