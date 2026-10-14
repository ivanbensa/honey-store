interface ProductProps {
    name: string
    price: number
}

function ProductCard({name, price}: ProductProps) {
    return(
        <div>
            <h3>{ name }</h3>
            <p>{ price }</p>
        </div>
    );
}

export default ProductCard;