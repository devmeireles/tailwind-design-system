/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("renders button with correct text", () => {
    render(<Button onClick={() => {}}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("renders button with correct text", () => {
    render(<Button onClick={() => {}}>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  test("renders a primary disabled button", () => {
    render(
      <Button block disabled>
        Test Button
      </Button>
    );
    const button = screen.getByText("Test Button");
    expect(button).toHaveAttribute("disabled");
  });

  test("renders a danger outlined button", () => {
    render(
      <Button onClick={() => {}} color="danger" variant="outlined">
        Test Button
      </Button>
    );
    const button = screen.getByText("Test Button");
    expect(button).toHaveClass(
      "border-danger-500 text-danger-700 hover:border-danger-700"
    );
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Test Button</Button>);
    fireEvent.click(screen.getByText("Test Button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
