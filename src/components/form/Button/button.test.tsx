import { render } from "@testing-library/react";
import Button, { ButtonProps } from ".";

describe("Button", () => {
  const renderButton = (props: ButtonProps) => render(<Button {...props} />);

  test("renders with primary color and contained variant", () => {
    const { container } = renderButton({
      children: "Button",
      color: "primary",
      variant: "contained",
    });
    expect(container.firstChild).toHaveClass(
      "bg-primary-500 hover:bg-primary-700"
    );
  });

  test("renders with secondary color and text variant", () => {
    const { container } = renderButton({
      children: "Button",
      color: "secondary",
      variant: "text",
    });
    expect(container.firstChild).toHaveClass(
      "text-secondary-700 hover:bg-secondary-100"
    );
  });

  test("renders with danger color and outlined variant", () => {
    const { container } = renderButton({
      children: "Button",
      color: "danger",
      variant: "outlined",
    });
    expect(container.firstChild).toHaveClass(
      "border-danger-500 text-danger-700 hover:border-danger-700"
    );
  });

  test("renders with rounded class", () => {
    const { container } = renderButton({ children: "Button", rounded: true });
    expect(container.firstChild).toHaveClass("rounded-lg");
  });

  test("renders with block class", () => {
    const { container } = renderButton({ children: "Button", block: true });
    expect(container.firstChild).toHaveClass("w-full");
  });

  test("renders with custom className", () => {
    const { container } = renderButton({
      children: "Button",
      className: "custom-class",
    });
    expect(container.firstChild).toHaveClass("custom-class");
  });

  test("renders with disabled state", () => {
    const { container } = renderButton({ children: "Button", disabled: true });
    expect(container.firstChild).toHaveClass("opacity-50 cursor-not-allowed");
  });
});
