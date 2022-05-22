describe("payment", () => {
  it("user can make a payment for one product", () => {
    //start from the home page
    cy.visit("http://localhost:3000/");
    //select a product
    cy.get('[href="/products/ji42pR"] > .ant-card-cover > img').click();
    cy.url().should("include", "/products");
    //buy a product
    cy.get("a.ant-btn > a").click();
    //fill in the form
    cy.get("#buyProcess_email").type("hamza@gmail.com");
    cy.findByRole("textbox", {
      name: /firstname/i,
    }).type("hamza");
    cy.findByRole("textbox", {
      name: /lastname/i,
    }).type("benyaflah");

    // cy.get(
    //   "#buyProcess > div:nth-child(4) > div:nth-child(2) > div > div > div > span:nth-child(3) > span:nth-child(2) > span > svg > path"
    // ).click();
    // cy.get(".ant-select-selection-item").type("Algeria");
  });
});
