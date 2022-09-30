import "whatwg-fetch";
import { render, screen } from "test-utils";
import { describe, expect, it } from "vitest";

import { Cart } from "./Cart";
import { CartState } from "~/interfaces/cart";
import cartReducer, { addToCart, decreaseQuantity, increaseQuantity } from "~/slices/cartSlice";

describe("Cart", () => {
  it("should not have any items in the cart initially", () => {
    render(<Cart />);
    expect(screen.getByText("Cart is empty")).toBeInTheDocument();
    expect(screen.queryByTestId("cart-item")).not.toBeInTheDocument();
  });

  it("should render correct number of cart items", () => {
    render(<Cart />, {
      preloadedState: {
        cart: {
          items: [
            { name: "Test Product", price: 9.99, quantity: 2 },
            { name: "Test Product 2", price: 9.99, quantity: 1 },
          ],
        },
      },
    });
    expect(screen.queryAllByTestId("cart-item")).toHaveLength(2);
  });

  it("should add items to the cart", () => {
    expect(
      cartReducer(
        { items: [] } as CartState,
        addToCart({ name: "Test Product", price: 9.99, quantity: 2 })
      )
    ).toEqual({ items: [{ name: "Test Product", price: 9.99, quantity: 2 }] });
  });

  it("should increase the quantity of item in cart", () => {
    expect(
      cartReducer(
        { items: [{ name: "Test Product", price: 9.99, quantity: 1 }] } as CartState,
        increaseQuantity("Test Product")
      )
    ).toEqual({
      items: [{ name: "Test Product", price: 9.99, quantity: 2 }],
    });
  });

  it("should decrease the quantity of item in cart", () => {
    expect(
      cartReducer(
        { items: [{ name: "Test Product", price: 9.99, quantity: 3 }] } as CartState,
        decreaseQuantity("Test Product")
      )
    ).toEqual({
      items: [{ name: "Test Product", price: 9.99, quantity: 2 }],
    });
  });
});
