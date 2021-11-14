/// <reference types="cypress" />

import { LoginPage } from "../page-objects/login-page.js";
import { SettingsPage } from "../page-objects/settings-page.js";

describe('Change Call Forwarding Settings', () => {
    const loginPage = new LoginPage()
    const settingsPage = new SettingsPage()

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
        //Log in
        cy.fixture('userAccount').then(user => {
            loginPage.navigate()
            loginPage.login(user.username,user.password)
        }) 
        
        //Go to settings
        settingsPage.navigate()
        
    })

    it('Change Call Forwarding Number', () => {
    
        var phoneNumber = generateValidPhoneNumber()

        function generateValidPhoneNumber() {
            return '04' + Math.floor(Math.random() * 100000000);
        }

        //Edit Call Forwarding Number
        settingsPage.editCallForwardingSettings()
        settingsPage.inputForwardingNumber(phoneNumber)
        settingsPage.closeUpdateSuccessModal()
        
        //check that the forwarding number is updated
        cy.get('#settings_call_forwarding > div > div > div.small-8.medium-8.large-10.columns > div.margin-top-half.row > div').should('contain.text', phoneNumber)
    })
    
    it('Switch Off Call Forwarding', () => {
        
        //Set Call Forwarding to No
        settingsPage.editCallForwardingSettings()
        settingsPage.selectNoCallForwarding()
        settingsPage.clickCallForwardingSaveBtn()
        settingsPage.closeUpdateSuccessModal()
        
        //Check that call forwarding is disabled
        cy.get('#settings_call_forwarding > div > div.row.margin-top > div.small-1.medium-2.large-1.columns.bold.text-right.setting-option-value-text').should('contain.text', 'No')
    
    })

})

