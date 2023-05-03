import MainPage from "../../pageobjects/MainPage.page"
import CatalogPage from "../../pageobjects/PriceFilter.page"

describe('Allo Price Filter Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

//Fist failed test case
it('Should verify the price filter working correctly', () => {
    cy.url().should('eq','https://allo.ua/');
    CatalogPage.clickFilterImagePhone();
    CatalogPage.clickSamsungBtn();
    CatalogPage.clickGarminBtn();
    CatalogPage.clickPopUpBtn();
    CatalogPage.assertionSearchElements.filter(':contains("Money")').should('be.visible'); 
  })
})