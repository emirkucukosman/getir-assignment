import { emptyApi } from "./emptyApi";
import { Product } from "./productApi";

export const tagApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<string[], void>({
      query: () => "/items",
      transformResponse: (response: Product[]) => {
        // Create a new set to prevent double values
        const tags = new Set();

        // Iterate over items
        response.forEach((item) => {
          // Iterate over tags and add each tag to set
          item.tags.forEach((tag: string) => tags.add(tag));
        });

        // Convert the set to array (because set is not serializible) and return it
        return Array.from(tags) as string[];
      },
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
