import Button from "./Button.tsx";

interface ProductProps {
    name: string
    price: number
    image: string
    onAddToCart: () => void
    onViewDetails: () => void;
}

function ProductCard({name, price, image, onAddToCart, onViewDetails}: ProductProps) {
    return(
        <div className="bg-white rounded-xl shadow-md p-6 border">
            <img className="w-full aspect-[3/4] object-cover rounded-lg mb-4" src={image} alt={name} />
            <h3 className="text-xl font-semibold">{ name }</h3>
            <p className="text-lg font-bold text-amber-600">{ price.toFixed(2) } €</p>
            <Button onClick={onAddToCart} text="Add to Cart" />
            <Button onClick={onViewDetails} text="View Details" />
        </div>
    );
}

export default ProductCard;