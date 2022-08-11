describe("Game tests", () => {
  before(() => {
    cy.visit("http://localhost:3004");
  });

  it("Test that I can make a choice", () => {
    // cy.visit("http://localhost:3004");

    cy.get(`[data-testid="result_footer"]`).as("result_footer");

    cy.get(`@result_footer`).should("contain", "Waiting for your choice!");

    cy.get(".player button").first().click();
    cy.get(`@result_footer`).should("contain", "Tie game");

    cy.get(".computer button:contains(?)").should("have.length", 2);
  });

  it("Can fetch high scores", () => {
    // cy.visit("http://localhost:3004");

    cy.intercept("**/andydlindsay/moai-axe-tree/high-scores", {
      fixture: "high-scores",
    }).as("highScoreData");

    cy.get('[data-testid="high-scores"]').click();
    cy.wait("@highScoreData");
    cy.get(`[data-testid="result_footer"]`).contains("Matthew");
  });
});
