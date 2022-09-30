import { useMemo, useState } from "react";

// Services
import { useGetTagsQuery } from "~/services/tagApi";

// Redux
import { useAppDispatch, useAppSelector } from "~/app/hook";
import { selectTags, setArrayFilter } from "~/slices/filterSlice";

// UI Components
import { CheckboxButton } from "~/ui/CheckboxButton";
import { TextField } from "~/ui/TextField";
import { Card } from "~/ui/Card";

export const Tags = () => {
  const dispatch = useAppDispatch();
  const tagsFilter = useAppSelector(selectTags);

  // Queries
  const { data: tags, isLoading } = useGetTagsQuery();

  // State
  const [search, setSearch] = useState("");

  // Memoized
  const filteredTags = useMemo(() => {
    if (!tags) return [];
    if (!search) return tags;
    return tags.filter((tag) => {
      return tag.toLowerCase().includes(search.toLowerCase());
    });
  }, [tags, search]);

  const handleTagFilterChange = (value: string) => () => {
    dispatch(setArrayFilter({ key: "tags", value }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Card title="Tags">
      <TextField placeholder="Search tag" value={search} onChange={handleSearch} />
      {isLoading && <CheckboxButton.Loading />}
      {!isLoading && (
        <div className="h-[108px] mt-4 overflow-scroll">
          {filteredTags.map((tag, i) => (
            <CheckboxButton.Input
              label={tag}
              value={tag}
              checked={tagsFilter.includes(tag)}
              onChange={handleTagFilterChange(tag)}
              key={i}
            />
          ))}
        </div>
      )}
    </Card>
  );
};
