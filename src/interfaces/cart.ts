export interface CartState {
  items: CartItem[];
}

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}
