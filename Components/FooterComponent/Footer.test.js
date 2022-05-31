import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";
import "@testing-library/jest-dom";

describe("should render FooterComponent", () => {
  it("should render", () => {
    render(<FooterComponent />);
    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument;
    const service = screen.getByText("NOS SERVICES");
    expect(service).toBeInTheDocument;
  });
});
