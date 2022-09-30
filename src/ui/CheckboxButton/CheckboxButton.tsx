import classes from "./styles/checkbox-button.module.css";

// Props
type InputProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ label, value, checked, onChange }) => {
  return (
    <label className={classes.container} role={"checkbox"}>
      {label}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={classes.checkmark}></span>
    </label>
  );
};

export const Loading = () => {
  return (
    <div className="flex items-center gap-2 mt-4 animate-pulse">
      <div className="h-6 w-6 bg-slate-200 rounded-md"></div>
      <div className="w-16 h-3 bg-slate-200 rounded-md"></div>
    </div>
  );
};
