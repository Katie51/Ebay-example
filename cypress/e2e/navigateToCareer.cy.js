import { faker } from '@faker-js/faker';

import CareersPages from '../fixtures/page_object/CareersPages';
import StartingPage from '../fixtures/page_object/StartingPage';
import data from '../fixtures/data.json';

const email = faker.internet.email();
const randomPosition = data.positions[Math.floor(Math.random() * data.positions.length)];


describe('Navigate to Careers page on eBay', () => {

  it('should navigate to the Careers', () => {
    cy.visit('/')
    StartingPage.scrollToBottom;
    StartingPage.careersLink.should('be.visible').click();
    cy.origin('https://jobs.ebayinc.com', () => {
      cy.url().should('include', '/us/en');
      cy.get('h1').should('contain', 'Careers');
    });
  });

  it('Create Job Alert', () => {

    CareersPages.visit;
    CareersPages.jobAlertInputField.type(randomPosition).type('{enter}');
    CareersPages.verifyFilters.should('contain', 'Filters');
    CareersPages.enterEmail.should('be.visible').type(email);
    CareersPages.createJobsAlertButton.click();
    CareersPages.verifyEmailVerification.should('be.visible');

  });
});
