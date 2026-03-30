import React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantMap = {
  primary: "bg-slate-950 text-white shadow-lg hover:shadow-blue-500/20",
  secondary: "bg-blue-600 text-white shadow-lg hover:shadow-blue-500/30",
  outline: "border-2 border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-400",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
};

const sizeMap = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-14 h-14",
};

export function IconButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: IconButtonProps) {
  const variantClass = variantMap[variant];
  const sizeClass = sizeMap[size];
  
  const buttonClasses = `flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 ${variantClass} ${sizeClass} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}