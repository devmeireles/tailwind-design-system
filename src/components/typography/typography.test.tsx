/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Typography, { TypographyProps } from ".";

describe("Typography", () => {
  const renderTypography = (props: TypographyProps) =>
    render(<Typography {...props} />);

  test("renders default typography", () => {
    const { getByText } = renderTypography({
      children: "Default Typography",
    });
    const typography = getByText("Default Typography");
    expect(typography).toBeInTheDocument();
    expect(typography.tagName.toLowerCase()).toBe("p");
  });

  test("renders body1 typography", () => {
    const { container } = renderTypography({
      children: "Typography",
      variant: "body1",
    });
    expect(container.firstChild).toHaveClass("text-base");
  });

  test("renders h1 typography", () => {
    const { container } = renderTypography({
      children: "Typography",
      variant: "h1",
    });
    expect(container.firstChild).toHaveClass("text-4xl");
  });

  test("renders light weight typography", () => {
    const { container } = renderTypography({
      children: "Typography",
      variant: "body1",
      weight: "light",
    });
    expect(container.firstChild).toHaveClass("font-light");
  });

  test("renders with custom tag", () => {
    const { container } = renderTypography({
      children: "Typography",
      tag: "h2",
      variant: "h2",
    });
    expect(container.firstChild).toHaveClass("text-3xl");
    expect(container.firstElementChild?.tagName.toLocaleLowerCase()).toBe("h2");
  });

  test("renders with custom color", () => {
    const { container } = renderTypography({
      children: "Typography",
      color: "text-red-500",
    });
    expect(container.firstChild).toHaveClass("text-red-500");
  });

  test("renders link variant", () => {
    const { container } = renderTypography({
      children: "Clickable Text",
      variant: "link",
    });
    expect(container.firstChild).toHaveClass("text-blue-500", "cursor-pointer");
  });

  test("renders with multiple classes", () => {
    const { container } = renderTypography({
      children: "Typography",
      variant: "h1",
      weight: "bold",
      color: "text-green-700",
    });
    expect(container.firstChild).toHaveClass(
      "text-4xl",
      "font-bold",
      "text-green-700"
    );
  });

  test("renders with default size when variant is invalid", () => {
    const { container } = renderTypography({
      children: "Typography",
      variant: "invalid-variant" as never,
    });
    expect(container.firstChild).toHaveClass("font-normal");
  });
});
