export class SettingsPage {
    //Settings Page URL
    navigate () {
        cy.visit('/my-account/my-amaysim/settings')
        cy.location('pathname', {timeout: 10000}).should('include', '/my-account/my-amaysim/settings') //check that user is taken to the settings page
    }

    editCallForwardingSettings () {
        cy.get('#edit_settings_call_forwarding').click()
        cy.get('.confirm_popup_confirm', {timeout: 60000}).click()
    }

    inputForwardingNumber (phoneNumber) {
        cy.get('#my_amaysim2_setting_call_divert_number').clear().type(phoneNumber + '{enter}')
    }

    selectNoCallForwarding () {
        cy.get('#update_call_forwarding_form > div:nth-child(2) > div > span:nth-child(2) > label > span').click() //select 'No'
        // cy.get('#my_amaysim2_setting_call_divert_false').click() //select 'No'
    }

    clickCallForwardingSaveBtn () {
        cy.get('.medium-5 > .button-green-action').click()
    }

    closeUpdateSuccessModal () {
        cy.contains('We have successfully updated your SIM settings.', {timeout: 60000})
        cy.get('.form_info_popup > :nth-child(4)', {timeout: 60000}).click()
    }
   
    generatePhoneNumber() {
        return '04' + Math.floor(Math.random() * 100000000);
    }
}