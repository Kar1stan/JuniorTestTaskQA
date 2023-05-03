import MainPage from "../../pageobjects/MainPage.page"
import CatalogPage from "../../pageobjects/PriceFilter.page"
import BasketPage from "../../pageobjects/Basket.page"

describe('Allo Basket Test', () => {
  beforeEach(() => {
    MainPage.visitUrl();
  })

//Second test case
it('Should test basket(adding items,deleting them)', () => {
    cy.url().should('eq','https://allo.ua/');
    CatalogPage.clickFilterImagePhone();
    CatalogPage.clickSamsungBtn();
    CatalogPage.clickGarminBtn();
    CatalogPage.clickPopUpBtn();
    BasketPage.clickAddFirstItemToBasket();
    BasketPage.clickCloseBasketBtn();
    BasketPage.clickNNBtn();
    CatalogPage.clickPopUpBtn();
    BasketPage.clickAddSecondItemToBasket();
    BasketPage.basketInfoFirstItem.should("be.visible");
    BasketPage.basketInfoSecondItem.should("be.visible");
    BasketPage.basketPrice.should('contain', '3\u00a0188 ₴');
    BasketPage.deleteItemBtn.should('not.be.disabled'); 
  })
})