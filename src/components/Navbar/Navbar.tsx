// Components
import { CartTotal } from "./CartTotal";

// Assets
import Logo from "~/assets/Logo.png";

export const Navbar = () => {
  return (
    <div className="grid grid-cols-3 place-items-center px-6 lg:px-24 bg-primary h-[76px]">
      <div />
      <img src={Logo} alt="logo" />
      <CartTotal />
    </div>
  );
};
