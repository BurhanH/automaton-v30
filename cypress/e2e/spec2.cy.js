describe('Sample Test Suite', function() {
  before(() => {
    // Runs once before all tests
    cy.log('Before all tests');

    /* 
    cy.exec('npm run db:reset && npm run db:seed');
    This command resets the database and seeds it with initial data.

    cy.task('db:reset');
    This task resets the database, which is useful for ensuring a clean state before tests run.
    
    cy.task('db:seed');
    This task seeds the database with initial data, which is useful for tests that require specific data to be present.
    */
  });

  beforeEach(() => {
    // Runs before each test
    cy.log('Before each test');

    /*
    // seed a post in the DB that we control from our tests
    cy.request('POST', '/test/seed/post', {
      title: 'First Post',
      authorId: 1,
      body: '...',
    })

    // seed a user in the DB that we can control from our tests
    cy.request('POST', '/test/seed/user', { name: 'Jane' })
      .its('body')
      .as('currentUser')
    })
    */
  });

  afterEach(() => {
    // Runs after each test
    cy.log('After each test');
    /*
    clean up data after each test if it nessesary
    */
  });

  after(() => {
    // Runs once after all tests
    cy.log('After all tests');

    /*
    cy.task('db:reset');
    This task resets the database, which is useful for ensuring a clean state after tests run.
    */
  });

  it('Test 1', () => {
    cy.log('Test 1 body');
    // Do some test actions here
  });

  it('Test 2', () => {
    cy.log('Test 2 body');
    // Do some test actions here
  });

  /*
  it('does something on a secured page', function () {
    const { username, password } = this.currentUser
    cy.login(username, password)
    // ...rest of test
  });
  */

});
