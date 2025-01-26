import StartingPage from "../fixtures/page_object/StartingPage";
import SearchResult from "../fixtures/page_object/SearchResult";
import data from "../fixtures/data.json"

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Search Field Tests', () => {
    it('Type "brush" in search field and verify', () => {
      
      StartingPage.searchField.click().type(data.items[0]).type('{enter}');
      StartingPage.searchField.should('have.value', data.items[0]);
      SearchResult.SearchingResult.should('contain', data.items[0]);
    });

    it('Type "mirror" in search field and verify', () => {
     
      StartingPage.searchField.click().type(data.items[1]).type('{enter}');
      StartingPage.searchField.should('have.value', data.items[1]);
      SearchResult.SearchingResult.should('contain', data.items[1]);
    });

    it('Type "bag" in search field and verify', () => {

      StartingPage.searchField.click().type(data.items[2]).type('{enter}');
      StartingPage.searchField.should('have.value', data.items[2]);
      SearchResult.SearchingResult.should('contain', data.items[2]);
    });
  });

});