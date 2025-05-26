/// <reference types="cypress" />

describe("Test", () => {
  it("sample test1 ", () => {
    expect(true).to.equal(true);
  });

  it("sample test2", () => {
    expect(true).to.equal(true);
  });

  it("add todos", () => {
    cy.visit('https://example.cypress.io/');           // 60 seconds will wait for the page to load; transition event
    cy.contains('type').click();                       // 4 seconds will wait for the element to be visible
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').should('have.value', 'fake@email.com');
  });
});
