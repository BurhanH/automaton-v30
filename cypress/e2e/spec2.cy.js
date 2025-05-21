describe('Sample Test Suite', function() {
  before(function() {
    // Runs once before all tests
    cy.log('Before all tests');
  });

  beforeEach(function() {
    // Runs before each test
    cy.log('Before each test');
  });

  afterEach(function() {
    // Runs after each test
    cy.log('After each test');
  });

  after(function() {
    // Runs once after all tests
    cy.log('After all tests');
  });

  it('Test 1', function() {
    cy.log('Test 1 body');
  });

  it('Test 2', function() {
    cy.log('Test 2 body');
  });
});
