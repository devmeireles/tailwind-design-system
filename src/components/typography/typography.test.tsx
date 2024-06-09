/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Typography", () => {
  test("renders a default typography", () => {
    render(<Typography>Default Typography</Typography>);
    const typography = screen.getByText("Default Typography");
    expect(typography).toBeInTheDocument();
  });

  test("renders a body1 typography", () => {
    render(<Typography variant="body1">Typography</Typography>);
    const typography = screen.getByText("Typography");
    expect(typography).toHaveClass("text-base");
  });

  test("renders a h1 typography", () => {
    render(<Typography variant="h1">Typography</Typography>);
    const typography = screen.getByText("Typography");
    expect(typography).toHaveClass("text-4xl");
  });

  test("renders a light typography", () => {
    render(
      <Typography variant="body1" weight="light">
        Typography
      </Typography>
    );
    const typography = screen.getByText("Typography");
    expect(typography).toHaveClass("font-light");
  });
});
