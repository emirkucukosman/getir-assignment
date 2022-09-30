// Services
import { useGetProductsQuery } from "~/services/productApi";

// Redux
import { useAppSelector } from "~/app/hook";
import { selectFilter } from "~/slices/filterSlice";

// Components
import { ProductCard } from "./ProductCard";
import { Pagination } from "~/components/Pagination";
import { ItemTypes } from "./ItemTypes";

export const Products = () => {
  const filter = useAppSelector(selectFilter);

  // Queries
  const { data } = useGetProductsQuery(filter);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[#6F6F6F] text-xl">Products</h3>
      <ItemTypes />
      {data && (
        <div className="bg-white p-4">
          {data.products.length === 0 && <span>No products found</span>}
          {data.products.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-y-5 gap-x-6">
              {data.products.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
      {data?.totalCount ? (
        <Pagination totalCount={data?.totalCount} currentPage={filter.page} />
      ) : null}
    </div>
  );
};
