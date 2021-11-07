/// <reference types="cypress" />

// it('Log in to My Amaysim', () => {
//     cy.visit('https://www.amaysim.com.au/')

//     //cy.get('li > .icon-link > span').click()



//     // cy.get('#username').type('0481862258')

//     // cy.get('#password').type('theHoff34')

//     // cy.get('#new_session > button').click()

//     // cy.wait(10000)

//     // cy.get('#edit_settings_call_forwarding').click()
    
// })

it('Log in to My Amaysim Settings page', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
    cy.visit('https://www.amaysim.com.au/my-account/my-amaysim/settings')

    cy.get('#username').type('0481862258')

    cy.get('#password').type('theHoff34')

    cy.get('#new_session > button').click()

    cy.wait(10000)

    cy.get('#edit_settings_call_forwarding').click()
    
})

// it('Manage "AS YOU GO" plan', () =>{
//     cy.contains('AS YOU GO', {timeout: 10000})
    
//     cy.contains('Manage plan').click()
// })

// it('Change Call Forwarding Number', () =>{
//     cy.get('#edit_settings_call_forwarding').click()
//     cy.get('body > div.form_confirm_popup.reveal-modal.padding-none.open > div > div > div > div.small-6.columns.padding-left > a').click()
//     cy.get('#my_amaysim2_setting_call_divert_number').type('02123456789')
//     cy.get('#update_call_forwarding_form > div.row.border-top.padding-top.margin-top > div > input').click()
//     cy.contains('We have successfully updated your SIM settings.')
//     cy.get('//*[@id="body-content"]/div[16]/a').click
//     cy.contains('Forward calls to 0412345678')
// })