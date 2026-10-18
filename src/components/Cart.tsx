interface CartItem {
    id:number;
    name:string;
    price:number;
    image:string;
    quantity:number;
}

interface CartProps {
    cart: CartItem[];
}

function Cart({ cart }): CartProps {
    return (
        <h2>Shopping Cart</h2>
    )
}

export default Cart