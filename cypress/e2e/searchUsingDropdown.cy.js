import SearchResult from "../fixtures/page_object/SearchResult";
import StartingPage from "../fixtures/page_object/StartingPage";
import data from "../fixtures/data.json";

describe('Search with dropDown', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('Should navigate to the Toys section', () => {
        StartingPage.shopByCategory.click();
        StartingPage.toysAndHobbies.click();
        SearchResult.ToysAndHobbiesSection.should('have.text', 'Toys & Hobbies');
    });

    it('Should find Car Toy', () => {
        StartingPage.searchField.click().type(data.toys[0]);
        StartingPage.dropDown.select('Toys & Hobbies');
        StartingPage.searchButton.click();
        SearchResult.SearchItem.should("be.visible").and("contain", 'car');
    });
})  
