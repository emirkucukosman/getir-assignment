import classes from "./styles/radio-button.module.css";

// Redux
import { useAppDispatch, useAppSelector } from "~/app/hook";
import { selectOrder, selectSort, setFilter } from "~/slices/filterSlice";

// Props
type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
};

export const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value }) => {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);
  const order = useAppSelector(selectOrder);

  const handleChange = () => {
    const [sort, order] = value.split(",") as [string, "asc" | "desc"];
    dispatch(setFilter({ sort, order }));
  };

  return (
    <label className={classes.container}>
      {label}
      <input
        type="radio"
        name={name}
        value={value}
        checked={value === `${sort},${order}`}
        onChange={handleChange}
      />
      <span className={classes.checkmark}></span>
    </label>
  );
};
