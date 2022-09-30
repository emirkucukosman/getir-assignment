import { useMemo, useState } from "react";

// Redux
import { useAppDispatch, useAppSelector } from "~/app/hook";
import { selectManufacturers, setArrayFilter } from "~/slices/filterSlice";

// Services
import { useGetCompaniesQuery } from "~/services/companyApi";

// UI Components
import { CheckboxButton } from "~/ui/CheckboxButton";
import { TextField } from "~/ui/TextField";
import { Card } from "~/ui/Card";

export const Brands = () => {
  const dispatch = useAppDispatch();
  const manufacturers = useAppSelector(selectManufacturers);

  // Queries
  const { data: companies, isLoading, isError } = useGetCompaniesQuery();

  // State
  const [search, setSearch] = useState("");

  // Memoized
  const filteredCompanies = useMemo(() => {
    if (!companies) return [];
    if (!search) return companies;
    return companies.filter((company) => {
      return company.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [companies, search]);

  const handleBrandChange = (value: string) => () => {
    dispatch(setArrayFilter({ key: "manufacturers", value }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Card title="Brands">
      <TextField placeholder="Search brand" value={search} onChange={handleSearch} />
      {isError && <div className="text-red-500">Something went wrong</div>}
      {isLoading && <CheckboxButton.Loading />}
      {filteredCompanies.length > 0 && (
        <div className="h-[108px] mt-4 overflow-scroll">
          {filteredCompanies.map((company, i) => (
            <CheckboxButton.Input
              label={company.name}
              value={company.slug}
              checked={manufacturers.includes(company.slug)}
              onChange={handleBrandChange(company.slug)}
              key={i}
            />
          ))}
        </div>
      )}
    </Card>
  );
};
