// Redux
import { Provider } from "react-redux";
import { store } from "./app/store";

// Components
import { Navbar } from "~/components/Navbar";
import { MainGrid } from "~/components/MainGrid";
import { Brands } from "~/components/Brands";
import { Sorting } from "~/components/Sorting";
import { Tags } from "~/components/Tags";
import { Products } from "~/components/Products";
import { Cart } from "~/components/Cart";
import { MobileFilter } from "./components/MobileFilter";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <MainGrid>
          <div className="hidden lg:flex flex-col gap-4 col-span-1">
            <Sorting />
            <Brands />
            <Tags />
          </div>
          <div className="col-span-2">
            <Products />
          </div>
          <div className="hidden lg:block col-span-1">
            <Cart />
          </div>
        </MainGrid>
      </div>
      <MobileFilter />
    </Provider>
  );
};
