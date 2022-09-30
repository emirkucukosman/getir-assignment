import { emptyApi } from "./emptyApi";

export const companyApi = emptyApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], void>({
      query: () => "/companies",
    }),
  }),
});

export const { useGetCompaniesQuery } = companyApi;

interface Company {
  slug: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  account: number;
  contact: string;
}
