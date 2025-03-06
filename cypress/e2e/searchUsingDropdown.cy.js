import SearchResult from "../fixtures/page_object/SearchResult";
import StartingPage from "../fixtures/page_object/StartingPage";


describe('Search with dropDown', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should navigate to the Toys section', () => {

        StartingPage.shopByCategory.click();
        StartingPage.toysAndHobbies.click();
        SearchResult.ToysAndHobbiesSection.should('have.text', 'Toys & Hobbies');

    });

    it('should find Car Toy', () => {

        StartingPage.searchField.click().type('Car');
        StartingPage.dropDown.select('Toys & Hobbies');
        StartingPage.searchButton.click();
        SearchResult.SearchItem.should("be.visible").and("contain", 'Car');
        
    });
})  
