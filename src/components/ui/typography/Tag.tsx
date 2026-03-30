import React from "react";

export interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "premium" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantMap = {
  default: "bg-slate-100 text-slate-800",
  premium: "border border-blue-200 bg-blue-50 text-blue-800",
  outline: "border border-slate-300 bg-transparent text-slate-700",
};

const sizeMap = {
  sm: "py-1 px-3 text-xs",
  md: "py-2 px-6 text-sm",
  lg: "py-3 px-8 text-base",
};

export function Tag({
  children,
  variant = "default",
  size = "md",
  className = "",
}: TagProps) {
  const variantClass = variantMap[variant];
  const sizeClass = sizeMap[size];
  
  const tagClasses = `inline-block rounded-full ${variantClass} ${sizeClass} font-extrabold tracking-wider uppercase ${className}`;
  
  return <div className={tagClasses}>{children}</div>;
}