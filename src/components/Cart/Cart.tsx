import React from "react";

// Redux
import { useAppSelector } from "~/app/hook";
import { selectCartItems, selectCartTotal } from "~/slices/cartSlice";

// Components
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="overflow-scroll max-h-96 border-8 border-primary p-4">
      {cartItems.length === 0 && <span>Cart is empty</span>}
      {cartItems.length > 0 && (
        <React.Fragment>
          {cartItems.map((item, i) => (
            <CartItem item={item} key={i} />
          ))}
          <div className="flex justify-end">
            <div className="border-2 border-primary text-primary rounded-sm mt-4 px-3 py-2">
              ₺ {cartTotal.toFixed(2)}
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
