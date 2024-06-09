import classNames from "classnames";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "danger" | "warning" | "success";
  variant?: "contained" | "outlined" | "text";
  className?: string;
  rounded?: boolean;
  block?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  color = "primary",
  variant = "contained",
  className,
  rounded,
  block,
  ...props
}) => {
  const colorClasses = {
    primary: "bg-primary-500 hover:bg-primary-700",
    secondary: "bg-secondary-500 hover:bg-secondary-700",
    danger: "bg-danger-500 hover:bg-danger-700",
    warning: "bg-warning-500 hover:bg-warning-700",
    success: "bg-success-500 hover:bg-success-700",
  };

  const textColorClasses = {
    primary: "text-primary-700 hover:bg-primary-100",
    secondary: "text-secondary-700 hover:bg-secondary-100",
    danger: "text-danger-700 hover:bg-danger-100",
    warning: "text-warning-700 hover:bg-warning-100",
    success: "text-success-700 hover:bg-success-100",
  };

  const borderColorClasses = {
    primary: "border-primary-500 text-primary-700 hover:border-primary-700",
    secondary:
      "border-secondary-500 text-secondary-700 hover:border-secondary-700",
    danger: "border-danger-500 text-danger-700 hover:border-danger-700",
    warning: "border-warning-500 text-warning-700 hover:border-warning-700",
    success: "border-success-500 text-success-700 hover:border-success-700",
  };

  const baseClasses = "px-4 py-2 font-semibold";

  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={classNames(
        props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        block ? "w-full" : "inline-flex",
        baseClasses,
        className,
        {
          [colorClasses[color]]: variant === "contained",
          [textColorClasses[color]]: variant === "text",
          [borderColorClasses[color]]: variant === "outlined",
        },
        {
          "rounded-lg": rounded,
          border: variant === "outlined",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
