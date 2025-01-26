class StartingPage{

    get scrollToBottom() { return cy.scrollTo('bottom') }
    get careersLink() { return cy.contains('Careers')}
    get searchField() { return cy.get('[id="gh-ac"]')}
    get shopByCategory() { return cy.get('[class="gh-categories__title"]')}
    get toysAndHobbies() { return cy.contains('Toys & Hobbies')}
    get searchButton() { return cy.get('[class="gh-search-button__label"]')}
    get dropDown() { return  cy.get('select')}
    
    }
    export default new StartingPage();