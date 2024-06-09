import classNames from "classnames";
import React from "react";

interface TypographyProps
  extends React.HTMLAttributes<
    | HTMLParagraphElement
    | HTMLHeadingElement
    | HTMLSpanElement
    | HTMLAnchorElement
    | SVGElement
  > {
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "a";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "link";
  weight?: "light" | "regular" | "medium" | "bold";
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  weight = "regular",
  tag = "p",
  children,
  ...props
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      {...props}
      className={classNames(
        {
          "text-4xl": variant === "h1",
          "text-3xl": variant === "h2",
          "text-2xl": variant === "h3",
          "text-xl": variant === "h4",
          "text-lg": ["h5", "subtitle"].includes(variant),
          "text-base": ["h6", "subtitle2", "body1"].includes(variant),
          "text-sm": variant === "body2",
          "text-xs": ["caption", "overline"].includes(variant),
        },
        {
          "font-light": weight === "light",
          "font-normal": weight === "regular",
          "font-medium": weight === "medium",
          "font-bold": weight === "bold",
        },
        {
          "text-blue-500 cursor-pointer": variant === "link",
        },
        "text-gray-800"
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
