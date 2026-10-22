import Button from "./Button.tsx";

// Defines the structure of cart items
interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

// Defines the props required by the Cart component
interface CartProps {
    cart: CartItem[];
    removeFromCart: (id: number) => void;
}

function Cart({cart, removeFromCart}: CartProps) {
    return (
        <section className="pt-10">

            <h2 className="mb-6 font-serif text-3xl font-bold text-stone-900">
                🛒 Shopping Cart
            </h2>

            {/* Displays a message if the cart is empty, otherwise shows cart items */}
            {cart.length === 0 ? (
                <p className="text-stone-500">
                    Your cart is empty.
                </p>
            ) : (
                <div className="space-y-4">

                    {/* Renders each product in the shopping cart */}
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col gap-4 rounded-xl border border-amber-100 bg-white p-4 sm:flex-row sm:items-center"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-24 w-24 rounded-lg object-cover"
                            />

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-stone-900">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-stone-500">
                                    Quantity: {item.quantity}
                                </p>

                                <p className="mt-2 font-bold text-amber-700">
                                    {(item.price * item.quantity).toFixed(2)} €
                                </p>
                            </div>

                            {/* Removes the selected product from the cart */}
                            <Button
                                text="Remove"
                                onClick={() => removeFromCart(item.id)}
                                variant="secondary"
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Cart