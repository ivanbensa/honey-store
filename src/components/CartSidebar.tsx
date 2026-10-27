import Cart from "./Cart";
import type { CartItem } from "../types/cart";

// Defines the props required by the CartSidebar component
interface CartSidebarProps {
    cart: CartItem[];
    totalPrice: number;
    removeFromCart: (id: number) => void;
    onClose: () => void;
}

// Displays the shopping cart in a sidebar
function CartSidebar({
                         cart,
                         totalPrice,
                         removeFromCart,
                         onClose
                     }: CartSidebarProps) {
    return (
        <div className="fixed inset-0 z-50">

            {/* Dark overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Shopping cart sidebar */}
            <aside className="
                absolute right-0 top-0
                h-full w-full max-w-md
                overflow-y-auto
                bg-amber-50 p-6
                shadow-2xl
            ">
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="
                        absolute right-5 top-5
                        cursor-pointer text-2xl
                        text-stone-700 hover:text-amber-700
                    "
                >
                    ✕
                </button>

                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                />

                {/* Displays the total cart price */}
                <div className="mt-6 border-t border-amber-200 pt-4">
                    <p className="text-xl font-bold text-stone-900">
                        Total: {totalPrice.toFixed(2)} €
                    </p>
                </div>
            </aside>
        </div>
    );
}

export default CartSidebar;