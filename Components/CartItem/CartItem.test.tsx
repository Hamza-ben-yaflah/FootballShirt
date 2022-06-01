import { render, screen } from "@testing-library/react";
import CartItem from "./CartItem";
import "@testing-library/jest-dom";

jest.mock("../../context/cart", () => ({
  useCartDispatch: () => {
    return { setCart: jest.fn() };
  },
}));

describe("CartItem", () => {
  it("should render a CartItem", () => {
    const item = {
      name: "roma",
      image: "image",
      price: 100,
    };
    const visible = true;

    render(<CartItem item={item} visible={visible} />);
    const CardItem = screen.getByTestId("CardItem");
    expect(CardItem).toBeInTheDocument();
  });
});
