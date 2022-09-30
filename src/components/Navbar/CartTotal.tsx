// Redux
import { useAppSelector } from "~/app/hook";
import { selectCartTotal } from "~/slices/cartSlice";

export const CartTotal = () => {
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <div className="bg-secondary flex items-center place-self-end justify-end gap-2 text-white h-full px-2 lg:px-8">
      <svg viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
        <path d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z" fill="white" />
        <path
          d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z"
          fill="white"
        />
      </svg>
      <span className="text-xs sm:text-base">₺ {cartTotal.toFixed(2)}</span>
    </div>
  );
};
