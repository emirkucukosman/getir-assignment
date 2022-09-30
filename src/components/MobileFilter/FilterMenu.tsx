// Redux
import { useAppDispatch } from "~/app/hook";
import { toggleIsMobileFilterOpen } from "~/slices/layoutSlice";
import { resetFilter } from "~/slices/filterSlice";

// Components
import { Sorting } from "~/components/Sorting";
import { Brands } from "~/components/Brands";
import { Tags } from "~/components/Tags";
import { Button } from "~/ui/Button";

export const FilterMenu = () => {
  const dispatch = useAppDispatch();

  const handleCloseMobileFilter = () => {
    dispatch(toggleIsMobileFilterOpen(false));
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 w-full overflow-hidden bg-slate-100">
      <div className="flex flex-col gap-4 p-6 overflow-auto max-h-[98%]">
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2" onClick={handleCloseMobileFilter}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Close</span>
          </button>
          <div className="flex items-center gap-2">
            <Button onClick={handleCloseMobileFilter}>Apply</Button>
            <Button onClick={handleResetFilter}>Reset</Button>
          </div>
        </div>
        <Sorting />
        <Brands />
        <Tags />
      </div>
    </div>
  );
};
