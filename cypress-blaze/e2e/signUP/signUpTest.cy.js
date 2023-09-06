import { signUp } from "../../support/page_objects/signUpPage.cy"
import { navigateTo } from "../../support/page_objects/navigationPage.cy"

describe('Sign Up to Blaze', () => {
  beforeEach('open application',() => {
    cy.openHomePage()
  })


  it('Sign up to the system, click on the alert', () => {
    //Navigate to site
    //Variables
    const username = 'denisa'
    const password = 'automation'
    const alertMessage = 'This user already exist.'

    //Navigate and sign up
    navigateTo.signUpMenu()
    signUp.signInWithUsernamePassword(username,password)
    cy.confirmPopup(alertMessage)
  
  })

})