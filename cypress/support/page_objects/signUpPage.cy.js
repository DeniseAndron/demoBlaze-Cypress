const signUpElements = {
    singUsername: () => cy.get('#sign-username'),
    signPassword: () => cy.get('#sign-password'),
    signButton: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
}

export class signUpPage {

    signInWithUsernamePassword(name, password) {
        // Type in the username
        loginElements.singUsername().clear().type(name).should('have.value', name);

        // Type in the password
        loginElements.signPassword().type(password);

        // Click the sign up button
        loginElements.signButton().click();
    }



}

export const signUp = new signUpPage()
