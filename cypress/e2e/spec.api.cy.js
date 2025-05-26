/// <reference types="cypress" />

var targetUrl = 'https://jsonplaceholder.typicode.com';

const indexes = [];
for (let i = 1; i <= 100; i++) {
  indexes.push(i);
}

describe("Posts", () => {
  it("Get Posts", () => {
    cy.request('GET', `${targetUrl}/posts`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body.length).to.be.equals(100);
        expect(response.body[0]).to.have.property('userId');
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('title');
        expect(response.body[0]).to.have.property('body');
        
      });
  });
  
  indexes.forEach((index) => {
    it(`Get Post ${index}`, () => {
      cy.request('GET', `${targetUrl}/posts/${index}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('userId');
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('title');
          expect(response.body).to.have.property('body');
      });
    });
  });

  it("Get Post (Not Found)", () => {
      cy.request({
        method: 'GET',
        url: `${targetUrl}/posts/999`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty;
      });
    });
});

describe("Albums", () => {
  it("Get Albums", () => {
    cy.request('GET', `${targetUrl}/albums`)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body.length).to.be.equals(100);
        expect(response.body[0]).to.have.property('userId');
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('title');
      });
  });
  
  indexes.forEach((index) => {
    it(`Get Album ${index}`, () => {
      cy.request('GET', `${targetUrl}/albums/${index}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('userId');
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('title');
        });
      });
    });

    it("Get Album (Not Found)", () => {
      cy.request({
        method: 'GET',
        url: `${targetUrl}/albums/999`,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.empty;
      });
    });
});

describe("Cars", () => {
  it.skip("Get Cars", () => {
    cy.intercept('GET', `${targetUrl}/cars`, {
      statusCode: 200,
      body: [
        { id: 1, make: 'Toyota', model: 'Corolla', year: 2020 },
        { id: 2, make: 'Honda', model: 'Civic', year: 2019 },
        { id: 3, make: 'Ford', model: 'Focus', year: 2018 },
        { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2021 },
        { id: 5, make: 'Nissan', model: 'Altima', year: 2022 },
        { id: 6, make: 'Hyundai', model: 'Elantra', year: 2020 },
        { id: 7, make: 'Kia', model: 'Optima', year: 2019 },
        { id: 8, make: 'Volkswagen', model: 'Jetta', year: 2018 },
        { id: 9, make: 'Subaru', model: 'Impreza', year: 2021 },
        { id: 10, make: 'Mazda', model: '3', year: 2022 }
      ]
    }).as('getCars');

    cy.request('GET', `${targetUrl}/cars`).wait('@getCars')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body.length).to.be.equals(10);
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('make');
        expect(response.body[0]).to.have.property('model');
        expect(response.body[0]).to.have.property('year');
      });
  });
});