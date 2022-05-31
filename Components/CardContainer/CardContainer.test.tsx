import { render, screen } from "@testing-library/react";
import CardContainer from "./CardContainer";
import "@testing-library/jest-dom";

describe("CardContainer", () => {
  it("should rendres CardContainer element with", () => {
    const data = {
      products: [],
    };
    const categorie = "machtworn";
    render(<CardContainer categorie={categorie} data={data} />);
    const cardContainerEl = screen.getByTestId("cardContainer");
    expect(cardContainerEl).toBeInTheDocument();
    const title = screen.getByText("SHIRTS");
    expect(title).toBeInTheDocument();
    const container = screen.getByTestId("Container").childNodes;
    expect(container.length).toEqual(0);
  });
});
