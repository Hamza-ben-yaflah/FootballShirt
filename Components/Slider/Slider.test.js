import { render, screen } from "@testing-library/react";
import Slider from "./Slider";
import "@testing-library/jest-dom";

describe("Slider", () => {
  it("should render", () => {
    render(<Slider />);
    const slider = screen.getByTestId("slider");
    expect(slider).toBeInTheDocument();
    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("href", "/MatchWorn/Matchworn");
  });
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
