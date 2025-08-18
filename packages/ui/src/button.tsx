"use client";

import { ReactNode } from "react";

interface ButtonProps {
  variant: "primary" | "outline" | "secondary"
  children: ReactNode;
  className?: string;
  onClick?: ()=> void;
  size?: "lg" | "sm"
}

export const Button = ({ children, className, onClick, variant, size }: ButtonProps) => {
  return (
    <button
      className={`${className} 
        ${variant === "primary" ? "bg-blue-600" : variant == "secondary" ? "bg-white text-black" : " border shadow-sm text-black"} 
        ${size == "lg" ? "px-4 py-2 rounded-lg" : "px-2 py-1 rounded"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
