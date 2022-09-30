import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import type { AppStore, RootState } from "./src/app/store";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";

import { emptyApi } from "./src/services/emptyApi";
import cartReducer from "./src/slices/cartSlice";
import filterReducer from "./src/slices/filterSlice";
import layoutReducer from "./src/slices/layoutSlice";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<PreloadedState<RootState>>;
  store?: AppStore;
}

const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        api: emptyApi.reducer,
        cart: cartReducer,
        filter: filterReducer,
        layout: layoutReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...renderOptions,
  });

export * from "@testing-library/react";

export { default as userEvent } from "@testing-library/user-event";

export { customRender as render };
