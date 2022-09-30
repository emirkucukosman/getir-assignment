// UI Components
import { Card } from "~/ui/Card";
import { RadioButton } from "~/ui/RadioButton";

export const Sorting = () => {
  return (
    <Card title="Sorting">
      <RadioButton label="Price low to high" name="sorting" value="price,asc" />
      <RadioButton label="Price high to low" name="sorting" value="price,desc" />
      <RadioButton label="New to old" name="sorting" value="added,asc" />
      <RadioButton label="Old to new" name="sorting" value="added,desc" />
    </Card>
  );
};
