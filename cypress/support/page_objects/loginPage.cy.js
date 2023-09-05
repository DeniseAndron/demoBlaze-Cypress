const loginElements = {
    loginUsername: () => cy.get('#loginusername'),
    passwordPassword: () => cy.get('#loginpassword'),
    loginButton: () => cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
}

export class loginPage {

    signInWithUsernamePassword(username, password) {
        // Type in the username
        loginElements.loginUsername().clear().type(username).should('have.value', username);

        // Type in the password
        loginElements.passwordPassword().type(password);

        // Click the sign up button
        loginElements.loginButton().click();
    }



}

export const login = new loginPage()