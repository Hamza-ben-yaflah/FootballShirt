describe("payment", () => {
  it("user can make a payment for one product", () => {
    //start from the home page

    // cy.intercept("**/products/**", (req) => {
    //   req.continue((res) => {
    //     res.send({ fixture: "product.json" });
    //   });
    // }).as("productRequest");

    cy.visit("http://localhost:3000/");
    cy.get(`[data-cy=product]`).first().click(); //select a product
    cy.url().should("include", "/products");
    // //buy a product
    // cy.get("a.ant-btn > a").click();
    cy.get(`[data-cy=buy-button]`).click(); //select a product
    cy.intercept("*/BuyProcess/ji42pR", { body: {} });
    cy.get(`[data-cy=select-button]`).click(); //select a product
    cy.get(`[data-cy=Afghanistan]`).click(); //select a product

    // //fill in the form
    // cy.get("#buyProcess_email").type("hamza@gmail.com");
    // cy.findByRole("textbox", {
    //   name: /firstname/i,
    // }).type("hamza");
    // cy.findByRole("textbox", {
    //   name: /lastname/i,
    // }).type("benyaflah");

    // cy.get(
    //   "#buyProcess > div:nth-child(4) > div:nth-child(2) > div > div > div > span:nth-child(3) > span:nth-child(2) > span > svg > path"
    // ).click();
    // cy.get(".ant-select-selection-item").type("Algeria");
  });
});
