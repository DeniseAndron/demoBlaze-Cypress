const homePageElements = {
    addToCartButton: () => cy.get('.btn.btn-success.btn-lg')
}

export class homePage {


    clickOnItems(item) {
        cy.get('#tbodyid')
            .find('.card-title')
            .contains(item)
            .click()

    }

    addItemToCart() {
        homePageElements.addToCartButton()
            .click()
    }
}

export const homeDash = new homePage()