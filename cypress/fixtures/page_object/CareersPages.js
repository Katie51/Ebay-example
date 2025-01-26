class CareersPage {

    get visit() { return cy.visit('https://jobs.ebayinc.com'); }
    get jobAlertInputField() { return cy.get('[type="text"]').click(); }
    get verifyFilters() { return cy.get('h3 span') }
    get enterEmail() { return cy.get('[aria-label="Enter email"]')}
    get verifyEmailVerification() { return cy.get('[data-ph-at-id="sent-email-verify-email-text"]')}
    get createJobsAlertButton() { return cy.get('[class="btn plain-button create-jobAlert-button au-target"]')}
    
  }
  
  export default new CareersPage();