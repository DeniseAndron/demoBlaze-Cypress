const signUpElements = {
    singUsername: () => cy.get('#sign-username'),
    signPassword: () => cy.get('#sign-password'),
    signButton: () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
}

export class signUpPage {

    signInWithUsernamePassword(name, password) {
        // Type in the username
        signUpElements.singUsername().clear().type(name).should('have.value', name);

        // Type in the password
        signUpElements.signPassword().type(password);

        // Click the sign up button
        signUpElements.signButton().click();
    }



}

export const signUp = new signUpPage()
