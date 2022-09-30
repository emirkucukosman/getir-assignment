import { configureStore } from "@reduxjs/toolkit";

// Reducers
import filterReducer from "~/slices/filterSlice";
import cartReducer from "~/slices/cartSlice";
import layoutReducer from "~/slices/layoutSlice";

// Services
import { emptyApi } from "~/services/emptyApi";
import { companyApi } from "~/services/companyApi";
import { tagApi } from "~/services/tagApi";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    layout: layoutReducer,
    [emptyApi.reducerPath]: emptyApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [tagApi.reducerPath]: tagApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(emptyApi.middleware),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
