import Button from "./Button.tsx";

// Defines the props required by the ProductCard component
interface ProductProps {
    name: string
    price: number
    image: string
    onAddToCart: () => void
    onViewDetails: () => void;
}

function ProductCard({name, price, image, onAddToCart, onViewDetails}: ProductProps) {

    // Renders a product card with its image, name, price, and action buttons
    return (
        <div
            className="group bg-white rounded-2xl border border-amber-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <img className="w-full h-64 object-contain bg-amber-50 rounded-xl mb-5" src={image} alt={name}/>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">{name}</h3>
            <p className="text-2xl font-bold text-amber-700 mb-5">{price.toFixed(2)} €</p>

            {/* Handles adding products to the cart and viewing product details */}
            <div className="flex flex-wrap gap-3 mt-4">
                <Button
                    text="Add to Cart"
                    onClick={onAddToCart}
                />

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