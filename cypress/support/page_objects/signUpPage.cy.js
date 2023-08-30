export class signUpPage {

    signInWithUsernamePassword(name, password) {
        // Type in the username
        cy.get('#sign-username').clear().type(name).should('have.value', name);

        // Type in the password
        cy.get('#sign-password').type(password);

        // Click the sign up button
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }

    //Validate the alert
    confirmPopUpModal(text) {

        cy.on('window:alert', (txt) => {
            expect(txt).to.contains(text)
        })
    }

}

export const signUp = new signUpPage()
