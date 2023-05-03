import MainPage from "../../pageobjects/MainPage.page"
import GeolocationPage from "../../pageobjects/Geolocation.page"

describe('Allo Geolocation Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

//Fourth test case
it('Should test geolocation(change it)', () => {
   cy.url().should('eq','https://allo.ua/');
   GeolocationPage.clickSideMenuBtn();
   GeolocationPage.clickGeolocationBtn();
   GeolocationPage.fillGeolocationInput(Cypress.env('CITY'));
   cy.url().should('include','/odesa/');
 })
})