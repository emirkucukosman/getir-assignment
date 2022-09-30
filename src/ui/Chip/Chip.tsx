import React from "react";

// Props
type ChipProps = {
  label: string;
  selected?: boolean;
  onClick: (label: string) => void;
};

export const Chip: React.FC<ChipProps> = ({ label, selected, onClick }) => {
  return (
    <button
      className={`py-[6px] px-4 rounded-sm ${
        selected ? "bg-primary text-white" : "bg-[#F2F0FD] text-primary"
      }`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};
