
class BasketPage {
    get firstItem(){
        return cy.get("div[data-product-id='9364495']>div[class='product-card']>div[class='product-card__content']>div[class='product-card__buy-box']>button",{ timeout: 10000 })
    }
    
    get secondItem(){
        return cy.get("div[data-product-id='12666856']>div[class='product-card']>div[class='product-card__content']>div[class='product-card__buy-box']>button",{ timeout: 10000 })  
    }

    get phoneSearchFilterNN(){
        return cy.get("a[data-id='876']") 
    }

    get basketPrice(){
        return cy.get("span[class='total-box__price']") 
    }

    get closeBasketBtn(){
        return cy.get("div[class='v-modal__close-btn']")
    }

    get basketInfoFirstItem(){
        return cy.get("li[data-product-id='9364495']")
    }

    get basketInfoSecondItem(){
        return cy.get("li[data-product-id='12666856']")
    }

    get deleteItemBtn(){
        return cy.get("a[href='https://allo.ua/ua/fitnes-braslety/garmin-vivofit-jr3-disney-the-little-mermaid-010-02441-13_2.html']~svg[class='vi i-shared vi__close remove']")
    }

    clickAddFirstItemToBasket(){
        this.firstItem.click();
    }

    clickAddSecondItemToBasket(){
        this.secondItem.click();
    }

    clickCloseBasketBtn(){
        this.closeBasketBtn.click();
    }

    clickNNBtn(){
        this.phoneSearchFilterNN.click();
    }

}
export default new BasketPage();