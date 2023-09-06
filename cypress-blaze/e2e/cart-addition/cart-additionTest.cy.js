import { navigateTo } from "../../support/page_objects/navigationPage.cy"
import { homeDash } from "../../support/page_objects/homePage.cy"


describe('Add items to cart and check API response', () => {
  beforeEach('open application',() => {
    cy.openHomePage()
  })

  it('Navigate to dashboard and add Items to card, check API', () => {
    //We need to add it before the commands
    cy.intercept('POST', Cypress.env('apiURL') + '/viewcart').as('itemsCart')

    const alertMessage = 'Product added'

    navigateTo.homeMenu()
    homeDash.clickOnItems('Samsung galaxy s6')
    homeDash.addItemToCart()
    cy.confirmPopup(alertMessage)
    navigateTo.homeMenu()
    homeDash.clickOnItems('Nokia lumia 1520')
    homeDash.addItemToCart()
    cy.confirmPopup(alertMessage)

    //Navigate to cart and confirm the items were added
    navigateTo.cartMenu()

    
    cy.wait('@itemsCart').then (xhr => {
      console.log(xhr)
      expect(xhr.response.statusCode).to.equal(200)
    })

  })

})