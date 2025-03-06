<h3>eBay Example Project</h3>

This project demonstrates automated testing for the eBay platform using Cypress and the Page Object Model (POM) design pattern. The tests are designed to be run in parallel using GitHub Actions for continuous integration.

<h4>Key Features:</h4>

navigateToCareer Test: Automates navigation to eBay's career page and the creation of job alerts. It uses the faker library to generate random emails and pulls job positions from a data.json file for dynamic testing.

searchByWord Test: Verifies the search functionality using data-driven tests. Different search terms are typed into the search field, and results are validated against the expected terms, using items from the data.json file.

searchUsingDropdown Test: Tests category-based search by selecting a category from a dropdown and validating the search results for relevant items.

This project showcases proficiency in automation testing, POM design, data-driven testing, and CI/CD integration.
