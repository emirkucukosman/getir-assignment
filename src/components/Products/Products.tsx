// Services
import { useGetProductsQuery } from "~/services/productApi";

// Redux
import { useAppSelector } from "~/app/hook";
import { selectFilter } from "~/slices/filterSlice";

// Components
import { Pagination } from "~/components/Pagination";
import { ProductCard } from "./ProductCard";
import { ItemTypes } from "./ItemTypes";
import { Loading } from "./Loading";

export const Products = () => {
  const filter = useAppSelector(selectFilter);

  // Queries
  const { data, isLoading, isError } = useGetProductsQuery(filter);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[#6F6F6F] text-xl">Products</h3>
      {/* Item Types */}
      <ItemTypes />

      {/* Loading */}
      {isLoading && <Loading />}

      {/* Error */}
      {isError && <div className="text-red-500">Something went wrong</div>}

      {/* Data */}
      {data && (
        <div className="bg-white p-4">
          {/* No products found */}
          {data.products.length === 0 && <span>No products found</span>}

          {/* Products Grid */}
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
