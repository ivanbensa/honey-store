import Button from "./Button";
import CartBadge from "./CartBadge";

interface ProductDetailsProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
    quantity: number;
    onClose: () => void;
    onAddToCart: (origin: DOMRect) => void;
}

function ProductDetails({product, quantity, onClose, onAddToCart}: ProductDetailsProps) {
    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">

            <div
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8">

                {/* Closes the product details window */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close product details"
                    className="absolute right-5 top-4 cursor-pointer text-2xl text-stone-500 hover:text-stone-900"
                >
                    ✕
                </button>

                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full rounded-2xl bg-amber-50 object-contain"
                    />

                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
                            Natural Honey
                        </p>

                        <h2 className="mb-4 font-serif text-3xl font-bold text-stone-900">
                            {product.name}
                        </h2>

                        <p className="mb-6 text-2xl font-bold text-amber-700">
                            {product.price.toFixed(2)} €
                        </p>

                        <p className="mb-8 leading-relaxed text-stone-600">
                            Discover the rich taste of our carefully harvested,
                            pure natural honey.
                        </p>

                        {/* Handles adding the selected product to the cart or closing the window */}
                        <div className="relative inline-flex">
                            <Button
                                text="🛒 Add to Cart"
                                onClick={(e) =>
                                    onAddToCart(e.currentTarget.getBoundingClientRect())
                                }
                            />

                            <CartBadge quantity={quantity} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
