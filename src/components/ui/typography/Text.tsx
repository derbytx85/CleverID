import React from "react";

export interface TextProps {
  children: React.ReactNode;
  variant?: "p" | "span" | "small";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "hero-desc";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  className?: string;
}

const sizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "hero-desc": "text-lg md:text-2xl",
};

const weightMap = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export function Text({
  children,
  variant = "p",
  size = "base",
  weight = "medium",
  align = "left",
  className = "",
}: TextProps) {
  const sizeClass = sizeMap[size];
  const weightClass = weightMap[weight];
  const alignClass = `text-${align}`;
  
  const textClasses = `${sizeClass} ${weightClass} ${alignClass} ${className}`;
  
  switch (variant) {
    case "p":
      return <p className={textClasses}>{children}</p>;
    case "span":
      return <span className={textClasses}>{children}</span>;
    case "small":
      return <small className={textClasses}>{children}</small>;
    default:
      return <p className={textClasses}>{children}</p>;
  }
}