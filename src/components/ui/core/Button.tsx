import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const variantMap = {
  primary: "bg-slate-950 text-white shadow-lg hover:shadow-blue-500/20",
  secondary: "bg-blue-600 text-white shadow-lg hover:shadow-blue-500/30",
  outline: "border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-400",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
};

const sizeMap = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = variantMap[variant];
  const sizeClass = sizeMap[size];
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = `relative overflow-hidden rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 ${variantClass} ${sizeClass} ${widthClass} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}