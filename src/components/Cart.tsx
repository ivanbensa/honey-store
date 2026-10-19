import Button from "./Button.tsx";

interface CartItem {
    id:number;
    name:string;
    price:number;
    image:string;
    quantity:number;
}

interface CartProps {
    cart: CartItem[];
    removeFromCart: (id: number) => void;
}

function Cart({ cart, removeFromCart }: CartProps) {
    return (
        <>
        <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {(item.price * item.quantity).toFixed(2)}</p>
                    <Button onClick={() => removeFromCart(item.id)} text="Remove"/>
                </div>
            ))}
        </>
    )
}

export default Cart