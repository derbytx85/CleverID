import React from "react";

export interface GradientOrbsProps {
  className?: string;
}

export function GradientOrbs({ className = "" }: GradientOrbsProps) {
  return (
    <>
      <div 
        className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[150px] mix-blend-multiply animate-pulse-slow ${className}`} 
      />
      <div 
        className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow ${className}`}
        style={{ animationDelay: '2s' }}
      />
    </>
  );
}