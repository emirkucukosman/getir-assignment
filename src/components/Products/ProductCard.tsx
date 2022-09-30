// Services
import { Product } from "~/services/productApi";

// Redux
import { useAppDispatch } from "~/app/hook";
import { addToCart } from "~/slices/cartSlice";

// UI Components
import { Button } from "~/ui/Button";

// Props
type ProductCardProps = {
  product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="flex flex-col justify-between gap-2">
      <div className="flex flex-col gap-1">
        <div className="border-2 border-[#F3F0FE] p-4 rounded-[12px]">
          <div className="bg-[#C4C4C4] h-24"></div>
        </div>
        <span className="text-primary font-bold">₺ {product.price}</span>
        <span className="text-sm">{product.name}</span>
      </div>
      <Button onClick={handleAddToCart} size="sm">
        Add
      </Button>
    </div>
  );
};
