import React from "react";

export interface HeadingProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "hero-main" | "hero-sub";
  weight?: "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  align?: "left" | "center" | "right";
  className?: string;
}

const variantMap = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl lg:text-5xl",
  h3: "text-2xl md:text-3xl lg:text-4xl",
  h4: "text-xl md:text-2xl lg:text-3xl",
  h5: "text-lg md:text-xl lg:text-2xl",
  h6: "text-base md:text-lg lg:text-xl",
};

const sizeMap = {
  xs: "text-sm",
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-3xl",
  "3xl": "text-4xl",
  "hero-main": "text-5xl md:text-7xl lg:text-9xl",
  "hero-sub": "text-3xl md:text-4xl lg:text-5xl",
};

const weightMap = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

export function Heading({
  children,
  variant = "h1",
  size,
  weight = "black",
  align = "left",
  className = "",
}: HeadingProps) {
  const sizeClass = size ? sizeMap[size] : variantMap[variant];
  const weightClass = weightMap[weight];
  const alignClass = `text-${align}`;
  
  const headingClasses = `${sizeClass} ${weightClass} ${alignClass} tracking-tighter leading-[0.95] ${className}`;
  
  switch (variant) {
    case "h1":
      return <h1 className={headingClasses}>{children}</h1>;
    case "h2":
      return <h2 className={headingClasses}>{children}</h2>;
    case "h3":
      return <h3 className={headingClasses}>{children}</h3>;
    case "h4":
      return <h4 className={headingClasses}>{children}</h4>;
    case "h5":
      return <h5 className={headingClasses}>{children}</h5>;
    case "h6":
      return <h6 className={headingClasses}>{children}</h6>;
    default:
      return <h1 className={headingClasses}>{children}</h1>;
  }
}