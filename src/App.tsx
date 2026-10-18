import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from 'react';
import Button from "./components/Button.tsx";

interface CartItem {
    id:number;
    name:string;
    price:number;
    image:string;
    quantity:number;
}

interface Product {
    id:number;
    name:string;
    price:number;
    image:string;
}

function App() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const cartCount = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const totalPrice = cart.reduce((total, item) => {
            return total + item.price * item.quantity
    }, 0);

    function addToCart(product:Product) {
        setCart(prevCart => {
            const existingProduct = prevCart.find(
                item => item.id === product.id
            );
            if (existingProduct) {
                return prevCart.map((item) => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }

                    return item;
                });
            }
            return [
                ...prevCart,
                {
                    ...product,
                    quantity: 1
                }
            ];
        });
    }

    function removeFromCart(id: number) {
        setCart(prevCart => {
            return prevCart.filter(item => item.id !== id);
        });
    }

  return (
      <>
          <main className="max-w-7xl mx-auto px-6">
          <Header cartCount={cartCount} />
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                  <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onAddToCart={() => addToCart(product)}
                  />
              ))}
            </div>


              {cart.map((item) => (
                  <div key={item.id}>
                      <h3>{item.name}</h3>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: {(item.price * item.quantity).toFixed(2)} €</p>
                      <Button onClick={() => removeFromCart(item.id)} text="Remove"/>
                  </div>
              ))}

              <p>Total: {totalPrice.toFixed(2)} €</p>
          </main>
      </>
  );
}

export default App;
