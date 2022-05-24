describe("payment", () => {
  it("user can make a payment for one product", () => {
    cy.visit("http://localhost:3000/");
    cy.get(`[data-cy=product]`).first().click();
    cy.findByText(/buy now/i).click();
    //fill in the form
    cy.get("#buyProcess_email").type("hamza@gmail.com");
    cy.findByRole("textbox", {
      name: /firstname/i,
    }).type("hamza");
    cy.findByRole("textbox", {
      name: /lastname/i,
    }).type("benyaflah");

    // Cypress.Commands.add("multiSelect", (selector, text) => {
    //   cy.get(
    //     `.ant-select${selector} > .ant-select-selector > .ant-select-selection-overflow`
    //   ).click();
    //   cy.get(
    //     `.ant-select${selector} .ant-select-selection-search-input`
    //   ).clear();
    //   cy.get(`.ant-select${selector} .ant-select-selection-search-input`)
    //     .invoke("attr", "id")
    //     .then((selElm) => {
    //       const dropDownSelector = `#${selElm}_list`;
    //       cy.get(
    //         `.ant-select${selector} .ant-select-selection-search-input`
    //       ).type(`${text}`);
    //       cy.get(dropDownSelector)
    //         .next()
    //         .find(".ant-select-item-option-content")
    //         .click();
    //     });
    // });
    cy.get("#buyProcess_country").click().trigger("mousedown").click();
    cy.get("#buyProcess_streetAdress").type("ibno sina");
    cy.get("#buyProcess_city").type("ibno sina");
    cy.get("#buyProcess_phone").type(5546006);
  });
});
