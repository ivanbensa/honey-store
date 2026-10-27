import Header from './components/Header';
import ProductCard from "./components/ProductCard";
import {products} from "./data/products";
import {useState} from 'react';
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Benefits from "./components/Benefits";
import About from "./components/About";
import type { Product } from "./types/products";
import type { CartItem } from "./types/cart";

function App() {
    // Stores the products added to the shopping cart
    const [cart, setCart] = useState<CartItem[]>([]);
    // Stores the text entered in the search field
    const [search, setSearch] = useState("");
    // Stores the currently selected product category
    const [category, setCategory] = useState("All");
    // Stores the selected product or null if none is selected
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    // Controls whether the shopping cart sidebar is open or closed
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Filters products by search text and selected category
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || product.category === category;

        return matchesCategory && matchesSearch
    });

    // Calculates the total number of items in the shopping cart
    const cartCount = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    // Calculates the total price of all products in the shopping cart
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0);

    // Adds a product to the cart or increases its quantity if it already exists
    function addToCart(product: Product) {
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

    // Removes a product from the shopping cart by its ID
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

                <Hero/>

                <Categories
                    selectedCategory={category}
                    onCategoryChange={setCategory}
                />

                {/* Displays the products section with the title and search bar */}
                <div
                    id="products"
                    className="mt-12 mb-8 scroll-mt-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
                >
                    {/* Displays the products section title and description */}
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

                    {/* Displays the search icon inside the search input */}
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
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.35-4.35"/>
                        </svg>

                        {/* Handles product search and updates the search state */}
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

                {/* Displays filtered products and handles cart and product details actions */}
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

                {/* Displays selected product details and handles closing or adding to cart */}
                {selectedProduct && (
                    <ProductDetails
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onAddToCart={() => addToCart(selectedProduct)}
                    />
                )}

                {/* Displays the shopping cart sidebar when it is open */}
                {isCartOpen && (
                    <div className="fixed inset-0 z-50">

                        {/* Dark overlay - closes the cart when clicked */}
                        <div
                            className="absolute inset-0 bg-black/50"
                            onClick={() => setIsCartOpen(false)}
                        />

                        {/* Shopping cart sidebar */}
                        <aside className="
            absolute right-0 top-0
            h-full w-full max-w-md
            overflow-y-auto
            bg-amber-50 p-6
            shadow-2xl
        ">

                            {/* Closes the shopping cart sidebar when clicked */}
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

                            {/* Displays cart items and passes the function to remove products */}
                            <Cart
                                cart={cart}
                                removeFromCart={removeFromCart}
                            />

                            {/* Displays the total price of all products in the shopping cart */}
                            <div className="mt-6 border-t border-amber-200 pt-4">
                                <p className="text-xl font-bold text-stone-900">
                                    Total: {totalPrice.toFixed(2)} €
                                </p>
                            </div>

                        </aside>
                    </div>
                )}

                {/* Displays the benefits of buying our honey */}
                <Benefits/>

                {/* Displays the About Us section */}
                <About/>
            </main>

            {/* Displays the website footer */}
            <Footer/>
        </>
    );
}

export default App;
