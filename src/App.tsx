import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from 'react';
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Hero from "./components/Hero";

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
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);



    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || product.category === category;

        return matchesCategory && matchesSearch
    });

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
              <Hero />

              <input
                  type="text"
                  placeholder="Search honey..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="   my-6 w-full rounded-xl
                                border border-stone-300 bg-white
                                px-5 py-3 outline-none transition-all
                                focus:border-amber-500
                                focus:ring-2 focus:ring-amber-200
                                md:w-96"
              />

              <div className="flex gap-3 my-6">
                  <button
                      onClick={() => setCategory("All")}
                      className="px-5 py-2 bg-amber-500 text-white rounded-lg cursor-pointer"
                  >
                      All
                  </button>

                  <button
                      onClick={() => setCategory("Floral")}
                      className="px-5 py-2 bg-amber-500 text-white rounded-lg cursor-pointer"
                  >
                      Floral
                  </button>

                  <button
                      onClick={() => setCategory("Forest")}
                      className="px-5 py-2 bg-amber-500 text-white rounded-lg cursor-pointer"
                  >
                      Forest
                  </button>
              </div>

            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  onAddToCart={() => addToCart(product)}
                  onViewDetails={() => setSelectedProduct(product)}
                  />
              ))}
            </div>

              {selectedProduct && (
                  <ProductDetails
                      product={selectedProduct}
                      onClose={() => setSelectedProduct(null)}
                  />
              )}

              <Cart cart={cart} removeFromCart={removeFromCart} />

              <p>Total: {totalPrice.toFixed(2)} €</p>
          </main>
      </>
  );
}

export default App;
