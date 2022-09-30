// Redux
import { useAppDispatch } from "~/app/hook";
import { decreaseQuantity, increaseQuantity } from "~/slices/cartSlice";

import { CartItem as ICartItem } from "~/interfaces/cart";

// Props
type CartItemProps = {
  item: ICartItem;
};

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = (name: string) => () => {
    dispatch(increaseQuantity(name));
  };

  const handleDecreaseQuantity = (name: string) => () => {
    dispatch(decreaseQuantity(name));
  };

  return (
    <div className="flex items-center justify-between gap-4 border-b-[1px] border-b-slate-200 p-3">
      <div className="flex flex-col">
        <span>{item.name}</span>
        <span className="text-primary">₺ {item.price * item.quantity}</span>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={handleDecreaseQuantity(item.name)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
          </svg>
        </button>
        <div className="bg-primary px-3 py-1 text-white">{item.quantity}</div>
        <button onClick={handleIncreaseQuantity(item.name)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
};
