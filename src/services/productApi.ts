import { emptyApi } from "./emptyApi";

// Interfaces
import { FilterState } from "~/interfaces/filter";

export const productApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsParams>({
      query: (params) => {
        // Initialize search params with default values
        const searchParams = new URLSearchParams(
          `_limit=16&_page=${params.page}&_sort=${params.sort}&_order=${params.order}&itemType=${params.itemType}`
        );

        // If any manufacturer is provided append it to search params
        if (params.manufacturers.length > 0)
          searchParams.append("manufacturer", params.manufacturers.join(","));

        // If any tag is provided append it to search params
        if (params.tags.length > 0) searchParams.append("tags", params.tags.join(","));

        // Return the constructed url
        return `/items?${searchParams.toString()}`;
      },
      transformResponse: (response: Product[], meta) => {
        // Transform the response to include total page count to display it in pagination
        return {
          products: response,
          totalCount: Number(meta?.response?.headers.get("x-total-count")),
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApi;

export interface Product {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: number;
  manufacturer: string;
  itemType: string;
}

interface GetProductsResponse {
  products: Product[];
  totalCount: number;
}

interface GetProductsParams extends FilterState {}
