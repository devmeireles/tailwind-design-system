import classNames from "classnames";
import React from "react";

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement | HTMLImageElement> {
  imageUrl?: string;
  altText: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger" | "warning" | "success";
}

const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  altText,
  size = "medium",
  color = "primary",
  ...props
}) => {
  const colorClasses = {
    primary: "bg-primary-500 hover:bg-primary-700",
    secondary: "bg-secondary-500 hover:bg-secondary-700",
    danger: "bg-danger-500 hover:bg-danger-700",
    warning: "bg-warning-500 hover:bg-warning-700",
    success: "bg-success-500 hover:bg-success-700",
  };

  const getAvatarSize = () => {
    switch (size) {
      case "small":
        return "w-8 h-8";
      case "medium":
        return "w-12 h-12";
      case "large":
        return "w-16 h-16";
      default:
        return "w-12 h-12";
    }
  };

  const getNameInitials = () => {
    const name = altText.split(" ");
    return name
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };

  return (
    <>
      {imageUrl ? (
        <img
          {...props}
          src={imageUrl}
          alt={altText}
          className={classNames("rounded-full", getAvatarSize())}
        />
      ) : (
        <span
          {...props}
          className={classNames("rounded-full p-4", getAvatarSize(), [
            colorClasses[color],
          ])}
        >
          {getNameInitials()}
        </span>
      )}
    </>
  );
};

export default Avatar;
