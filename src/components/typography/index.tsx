import classNames from "classnames";
import React from "react";

export interface TypographyProps
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
  color?: string;
}

const variantClasses = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
  subtitle1: "text-lg",
  subtitle2: "text-base",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
  overline: "text-xs",
  link: "text-base text-blue-500 cursor-pointer",
};

const weightClasses = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  weight = "regular",
  tag = "p",
  children,
  color = "text-gray-800",
  ...props
}) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      {...props}
      className={classNames(
        variantClasses[variant],
        weightClasses[weight],
        `${color}`,
        props.className
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
