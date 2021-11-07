/// <reference types="cypress" />

it('Log in to My Amaysim', () => {
    cy.visit('https://accounts.amaysim.com.au/identity/login')

    cy.get('#username').type('0481862258')

    cy.get('#password').type('theHoff34')

    cy.get('#new_session > button').click()
    
})

it('Manage "AS YOU GO" plan', () =>{
    //cy.contains('AS YOU GO', {timeout: 10000})
    
    cy.get('#service_tile_mobile > div.sc-dfVpRl.IwUnx > a').click()
})

// it('Change Call Forwarding Number', () =>{
//     cy.get('#edit_settings_call_forwarding').click()
//     cy.get('body > div.form_confirm_popup.reveal-modal.padding-none.open > div > div > div > div.small-6.columns.padding-left > a').click()
//     cy.get('#my_amaysim2_setting_call_divert_number').type('02123456789')
//     cy.get('#update_call_forwarding_form > div.row.border-top.padding-top.margin-top > div > input').click()
//     cy.contains('We have successfully updated your SIM settings.')
//     cy.get('//*[@id="body-content"]/div[16]/a').click
//     cy.contains('Forward calls to 0412345678')
// })