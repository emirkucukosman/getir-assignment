// Redux
import { useAppDispatch, useAppSelector } from "~/app/hook";
import { selectItemType, setFilter } from "~/slices/filterSlice";

// UI Components
import { Chip } from "~/ui/Chip";

const chips = ["mug", "shirt"];

export const ItemTypes = () => {
  const dispatch = useAppDispatch();
  const itemType = useAppSelector(selectItemType);

  const handleOnClick = (label: string) => {
    dispatch(setFilter({ itemType: label as "mug" | "shirt" }));
  };

  return (
    <div className="flex items-center gap-2">
      {chips.map((chip, i) => (
        <Chip key={i} label={chip} selected={itemType === chip} onClick={handleOnClick} />
      ))}
    </div>
  );
};
