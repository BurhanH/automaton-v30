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
