
class SearchPage {
    get searchInput(){
        return cy.get("#search-form__input")
    }

    get searchSubmitBtn(){
        return cy.get("button[type='submit']")
    }

    get assertionSearchElements(){
        return cy.get("div[class='product-card__content']>a[class='product-card__title']")  
    }

    fillSearchInput(item:string){
        this.searchInput.type(item);
    }

    clickSubmitBtn(){
        this.searchSubmitBtn.click();
    }


}
export default new SearchPage();