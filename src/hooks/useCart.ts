import { useState } from "react";
import type { Product } from "../types/products";
import type { CartItem } from "../types/cart";

// Manages the shopping cart state and logic
export function useCart() {
    const [cart, setCart] = useState<CartItem[]>([]);

    // Adds a product or increases its quantity
    function addToCart(product: Product) {
        setCart(prevCart => {
            const existingProduct = prevCart.find(
                item => item.id === product.id
            );

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, quantity: 1 }];
        });
    }

    // Removes a product from the shopping cart
    function removeFromCart(id: number) {
        setCart(prevCart =>
            prevCart.filter(item => item.id !== id)
        );
    }

    // Calculates the total number of items in the cart
    const cartCount = cart.reduce(
        (total, item) => total + item.quantity, 0
    );

// Calculates the total price of all cart items
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity, 0
    );

    return {
        cart,
        addToCart,
        removeFromCart,
        cartCount,
        totalPrice
    };
}