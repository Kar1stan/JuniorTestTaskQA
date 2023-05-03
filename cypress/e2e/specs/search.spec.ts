import MainPage from "../../pageobjects/MainPage.page"
import SearchPage from "../../pageobjects/Search.page"

describe('Allo Search Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

//Third test case
it('Should test search input', () => {
   cy.url().should('eq','https://allo.ua/');
   SearchPage.fillSearchInput(Cypress.env('ITEM'));
   SearchPage.clickSubmitBtn();
   SearchPage.assertionSearchElements.filter(':contains("Samsung Galaxy A31")').should('be.visible'); 
 })
})