// Props
type TextFieldProps = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextField: React.FC<TextFieldProps> = ({ ...rest }) => {
  return <input type="text" className="p-3 border-2 border-slate-200 outline-none" {...rest} />;
};
