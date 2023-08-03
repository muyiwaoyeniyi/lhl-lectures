describe("Game tests", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Test that I can make a selection", () => {
    cy.get(`[data-testid="result_footer"]`).as("result_footer");

    cy.get("@result_footer").should("contain", "Waiting for your choice!");

    cy.get(".player button").first().click();

    cy.get("@result_footer").should("contain", "Tie game");

    cy.get(".computer button:contains(?)").should("have.length", 2);
  });

  it("fetched high scores", () => {
    cy.get(`[data-testid="result_footer"]`).as("result_footer");

    cy.intercept("**/andydlindsay/moai-axe-tree/high-scores", {
      fixture: "high-scores",
    }).as("high_scores_data");

    cy.get(`[data-testid="high-scores"]`).click();

    cy.wait("@high_scores_data");

    cy.get("@result_footer").contains("Karis");
  });
});
