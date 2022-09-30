import React from "react";

// Props
type MainGridProps = {
  children: React.ReactNode;
};

export const MainGrid: React.FC<MainGridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-2 px-6 lg:grid-cols-4 lg:py-8 lg:px-24">
      {children}
    </div>
  );
};
