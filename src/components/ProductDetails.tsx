import Button from "./Button";

interface ProductDetailsProps {
    product: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
    onClose: () => void;
}

function ProductDetails({ product, onClose }: ProductDetailsProps) {
    return (
        <div>
            <p>{product.price.toFixed(2)} €</p>
            <p>{product.price}</p>
            <Button text="Close" onClick={onClose} />
        </div>
    )
}

export default ProductDetails