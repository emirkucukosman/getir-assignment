import React from "react";

// Props
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
};

const padding = {
  sm: "p-0.5",
  md: "p-2",
  lg: "p-4",
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, size = "md" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white text-sm text-center rounded-sm ${padding[size]}`}
    >
      {children}
    </button>
  );
};
