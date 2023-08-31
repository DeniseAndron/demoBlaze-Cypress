export class NavigationPage {

    navigationLayoutPage(){
        cy.get('#nava > img').should('be.visible') //assert that the image is there
    .and('exist')
        cy.title().should('eq','STORE') //Verify the title
    }

    signUpMenu(){
        cy.get('#signin2')
        .should('have.text','Sign up')
        .click()
    }

    loginMenu(){
        cy.get('#login2')
        .should('have.text','Log in')
        .click()
    }

    cartMenu(){
        cy.get('#cartur')
        .should('have.text','Cart')
        .click()
    }

    aboutMenu(){
        cy.get(':nth-child(3) > .nav-link')
        .should('have.text','About us')
        .click() 
    }

    contactMenu(){
        cy.get(':nth-child(2) > .nav-link')
        .should('have.text','Contact')
        .click()
    }

    homeMenu(){
        cy.get('.active > .nav-link')
        .should('have.text','Home (current)')
        .click()
    }

}

export const navigateTo = new NavigationPage()