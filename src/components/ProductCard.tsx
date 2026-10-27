import Button from "./Button";
import CartBadge from "./CartBadge";
import type { Product } from "../types/products";

interface ProductProps extends Pick<Product, "name" | "price" | "image"> {
    quantity: number;
    onAddToCart: (origin: DOMRect) => void;
    onViewDetails: () => void;
}

function ProductCard({
                         name,
                         price,
                         image,
                         quantity,
                         onAddToCart,
                         onViewDetails
                     }: ProductProps) {
    return (
        <div className="group bg-white rounded-2xl border border-amber-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

            <img
                className="w-full h-64 object-contain bg-amber-50 rounded-xl mb-5"
                src={image}
                alt={name}
            />

            <h3 className="text-xl font-semibold text-stone-800 mb-2">
                {name}
            </h3>

            <p className="text-2xl font-bold text-amber-700 mb-5">
                {price.toFixed(2)} €
            </p>

            <div className="flex flex-wrap gap-3 mt-4">

                {/* Add to Cart button with animated quantity badge */}
                <div className="relative inline-flex">
                    <Button
                        text="Add to Cart"
                        onClick={(e) =>
                            onAddToCart(e.currentTarget.getBoundingClientRect())
                        }
                    />

                    <CartBadge quantity={quantity} />
                </div>

                <Button
                    text="View Details"
                    onClick={onViewDetails}
                    variant="secondary"
                />

            </div>
        </div>
    );
}

export default ProductCard;