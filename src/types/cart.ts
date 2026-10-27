import type { Product } from "./products";

// A cart item is a product with an additional quantity
export interface CartItem extends Product {
    quantity: number;
}