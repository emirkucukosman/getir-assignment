import React from "react";

// Props
type CardProps = {
  title: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div>
      <span className="text-gray-600 text-sm">{title}</span>
      <div className="flex flex-col gap-4 shadow-md p-4 mt-2 bg-white">{children}</div>
    </div>
  );
};
