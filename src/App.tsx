import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from 'react';

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
    const [cartCount, setCartCount] = useState(0);
    const [cart, setCart] = useState<CartItem[]>([]);

    function addToCart(product:Product) {
        setCart(prevCart => {
            const existingProduct = prevCart.find(
                item => item.id === product.id
            );
            if (existingProduct) {

            }
            return prevCart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }

                return item;
            });
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
                  onAddToCart={addToCart}
                  />
              ))}
            </div>
          </main>
      </>
  );
}

export default App;
