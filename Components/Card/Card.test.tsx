import { render, screen } from "@testing-library/react";
import CardShirt, { ICardShirt } from "./CardShirt";
import "@testing-library/jest-dom";

describe("Cardshirt", () => {
  it("should rendres Card element", () => {
    const cardShirt: ICardShirt = {
      id: "abc",
      image: "image",
      description: "shirtDescription",
      price: 56,
    };
    render(<CardShirt card={cardShirt} />);
    const cardLink = screen.getByTestId("linkId");
    const cardDescription = screen.getByText(cardShirt.description);
    const cardPrice = screen.getByText(cardShirt.price);
    const cardImage = screen.getByRole("img");
    expect(cardLink).toHaveAttribute("href", "/products/abc");
    expect(cardDescription).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
    expect(cardImage).toHaveAttribute("src", cardShirt.image);
    expect(cardImage).toHaveAttribute("alt", "car image");
  });
  it("should place # in href", () => {
    const cardHref: ICardShirt = {
      id: "",
      image: "",
      description: "shirtDescription",
      price: 56,
    };
    render(<CardShirt card={cardHref} />);
    const cardLink = screen.getByTestId("linkId");
    expect(cardLink).toHaveAttribute("href", "/#");
  });
});
