import React from "react";

// Redux
import { useAppDispatch, useAppSelector } from "~/app/hook";
import { selectIsMobileFilterOpen, toggleIsMobileFilterOpen } from "~/slices/layoutSlice";

// Components
import { FilterMenu } from "./FilterMenu";

export const MobileFilter = () => {
  const dispatch = useAppDispatch();
  const isMobileFilterOpen = useAppSelector(selectIsMobileFilterOpen);

  const handleToggleMobileFilter = () => {
    dispatch(toggleIsMobileFilterOpen());
  };

  return (
    <React.Fragment>
      <div className="fixed right-5 bottom-5 lg:hidden">
        <button
          onClick={handleToggleMobileFilter}
          className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-white shadow-md border-2 border-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      </div>
      {isMobileFilterOpen && <FilterMenu />}
    </React.Fragment>
  );
};
