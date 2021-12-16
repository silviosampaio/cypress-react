/// <reference types="cypress" />

describe("Users", () => {
  it("devem poder realizar um cadastro", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-cy=signup-form]").click();
    cy.get("[data-cy=signup-name]").type("Silvio");
    cy.get("[data-cy=signup-email]").type("teste@teste.com");
    cy.get("[data-cy=signup-password]").type("123");

    cy.intercept("**/**").as("sendsignup");
    cy.get("[data-cy=signup-button]").click();

    cy.wait("@sendsignup").then((data) => {
      //cy.log(JSON.stringify(data));
      expect(data.response.statusCode).be.eq(200);
      expect(data.response.body.user).has.property("_id");
    });
  });

  it.skip("devem poder realizar login", () => {});

  it.skip("devem poder recuperar senha", () => {});
});
