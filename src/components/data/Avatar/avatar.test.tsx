import { render } from "@testing-library/react";
import Avatar, { AvatarProps } from ".";

describe("Avatar", () => {
  const renderAvatar = (props: AvatarProps) => render(<Avatar {...props} />);

  test("renders with small size", () => {
    const { container } = renderAvatar({ altText: "John Doe", size: "small" });
    expect(container.firstChild).toHaveClass("w-8 h-8");
  });

  test("renders with medium size", () => {
    const { container } = renderAvatar({ altText: "John Doe", size: "medium" });
    expect(container.firstChild).toHaveClass("w-12 h-12");
  });

  test("renders with large size", () => {
    const { container } = renderAvatar({ altText: "John Doe", size: "large" });
    expect(container.firstChild).toHaveClass("w-16 h-16");
  });

  test("renders with default size when size is invalid", () => {
    const { container } = renderAvatar({
      altText: "John Doe",
      size: "invalid-size" as never,
    });
    expect(container.firstChild).toHaveClass("w-12 h-12");
  });

  test("renders initials when no image URL is provided", () => {
    const { getByText } = renderAvatar({ altText: "John Doe" });
    expect(getByText("JD")).toBeInTheDocument();
  });

  test("renders image when image URL is provided", () => {
    const { getByAltText } = renderAvatar({
      imageUrl: "https://example.com/avatar.jpg",
      altText: "John Doe",
    });
    expect(getByAltText("John Doe")).toBeInTheDocument();
  });
});
