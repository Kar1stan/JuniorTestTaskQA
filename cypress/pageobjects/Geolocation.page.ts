
class GeolocationPage {
    get sideMenuBtn(){
        return cy.get("button[class='mh-burger__btn']")
    }

    get geolocationBtn(){
        return cy.get("button[class='mh-button mh-touch-loc']")
    }

    get geolocationInput(){
        return cy.get("#city")
    }

    fillGeolocationInput(city:string){
        this.geolocationInput.type(city);
    }

    clickGeolocationBtn(){
        this.geolocationBtn.click();
    }

    clickSideMenuBtn(){
        this.sideMenuBtn.click();
    }
}
export default new GeolocationPage();