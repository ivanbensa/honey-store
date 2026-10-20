import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useState } from 'react';
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Benefits from "./components/Benefits";
import About from "./components/About";

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
    const [isCartOpen, setIsCartOpen] = useState(false);



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
              <Header
                  cartCount={cartCount}
                  onCartClick={() => setIsCartOpen(prev => !prev)}
              />

              <Hero />

              <Categories
                  selectedCategory={category}
                  onCategoryChange={setCategory}
              />



              <div
                  id="products"
                  className="mt-12 mb-8 scroll-mt-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
              >
                  {/* LEFT SIDE */}
                  <div>
                      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
                          OUR MOST POPULAR PRODUCTS
                      </p>

                      <h2 className="font-serif text-3xl font-bold text-stone-900 md:text-4xl">
                          Featured Honey
                      </h2>

                      <p className="mt-3 text-stone-600">
                          Discover our selection of pure, natural honey.
                      </p>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="relative w-full md:w-80">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
                      >
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.35-4.35" />
                      </svg>

                      <input
                          type="text"
                          placeholder="Search honey..."
                          aria-label="Search honey"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-12 pr-5 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                      />
                  </div>
              </div>


              <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
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
                      onAddToCart={() => addToCart(selectedProduct)}
                  />
              )}

              {isCartOpen && (
                  <div className="fixed inset-0 z-50">

                      {/* Tamna pozadina */}
                      <div
                          className="absolute inset-0 bg-black/50"
                          onClick={() => setIsCartOpen(false)}
                      />

                      {/* Sidebar */}
                      <aside className="
            absolute right-0 top-0
            h-full w-full max-w-md
            overflow-y-auto
            bg-amber-50 p-6
            shadow-2xl
        ">

                          {/* Close button */}
                          <button
                              onClick={() => setIsCartOpen(false)}
                              className="
                    absolute right-5 top-5
                    text-2xl text-stone-700
                    hover:text-amber-700
                    cursor-pointer
                "
                          >
                              ✕
                          </button>

                          <Cart
                              cart={cart}
                              removeFromCart={removeFromCart}
                          />

                          <div className="mt-6 border-t border-amber-200 pt-4">
                              <p className="text-xl font-bold text-stone-900">
                                  Total: {totalPrice.toFixed(2)} €
                              </p>
                          </div>

                      </aside>
                  </div>
              )}
              <Benefits />
              <About />
          </main>
          <Footer />
      </>
  );
}

export default App;
