
class CatalogPage{
    get phoneFilterImage(){
        return cy.get("img[src='https://i.allo.ua/media/catalog/category/mega_menu/smartphone.png']") 
    }

    get phoneSearchFilterSamsung(){
        return cy.get("a[href='https://allo.ua/ua/fitnes-braslety/proizvoditel-samsung/']") 
    }

    get phoneSearchFilterGarmin(){
        return cy.get("a[data-id='839']") 
    }

    get popUpMessageBtn(){
        return cy.get("button[class='f-popup__btn']") 
    }

    get assertionSearchElements(){
        return cy.get("div[class='v-pb__cur']>span[class='sum']")  
    }

     clickFilterImagePhone(){
      this.phoneFilterImage.click();
     }

     clickSamsungBtn(){
      this.phoneSearchFilterSamsung.click({force: true});
      //being covered by `<input id="search-form__input" placeholder="Пошук товарів" type="text" name="search" autocomplete="off" value="" class="search-form__input">`
     }

     clickGarminBtn(){
       this.phoneSearchFilterGarmin.click();
     }

     clickPopUpBtn(){
        this.popUpMessageBtn.click();
    }
    
}
export default new CatalogPage();
