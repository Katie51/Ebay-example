class Result{

    get SearchingResult() { return cy.get('.srp-controls__count-heading')}
    get ToysAndHobbiesSection() { return cy.get('[class="textual-display page-title"]')}
    get SearchItem() { return cy.get('h1[class="srp-controls__count-heading"]')}

}
export default new Result();