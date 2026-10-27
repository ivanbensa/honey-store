import Header from './components/Header';
import {useState} from 'react';
import ProductDetails from "./components/ProductDetails";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Benefits from "./components/Benefits";
import About from "./components/About";
import type { Product } from "./types/products";
import { useCart } from "./hooks/useCart";
import { useProductFilters } from "./hooks/useProductFilters";
import CartSidebar from "./components/CartSidebar";
import ProductSection from "./components/ProductSection";

function App() {
// Uses our custom hook to manage the shopping cart
    const {
        cart,
        addToCart,
        removeFromCart,
        cartCount,
        totalPrice
    } = useCart();
    // Manages product search and category filtering
    const {
        search,
        setSearch,
        category,
        setCategory,
        filteredProducts
    } = useProductFilters();

    // Stores the selected product or null if none is selected
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    // Controls whether the shopping cart sidebar is open or closed
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <>
            <main className="max-w-7xl mx-auto px-6">
                <Header
                    cartCount={cartCount}
                    onCartClick={() => setIsCartOpen(prev => !prev)}
                />

                <Hero/>

                {/* Displays product categories */}
                <Categories
                    selectedCategory={category}
                    onCategoryChange={setCategory}
                />

                {/* Displays the searchable product section */}
                <ProductSection
                    products={filteredProducts}
                    search={search}
                    onSearchChange={setSearch}
                    onAddToCart={addToCart}
                    onViewDetails={setSelectedProduct}
                />

                {/* Displays selected product details */}
                {selectedProduct && (
                    <ProductDetails
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                        onAddToCart={() => addToCart(selectedProduct)}
                    />
                )}

                {/* Displays the shopping cart sidebar */}
                {isCartOpen && (
                    <CartSidebar
                        cart={cart}
                        totalPrice={totalPrice}
                        removeFromCart={removeFromCart}
                        onClose={() => setIsCartOpen(false)}
                    />
                )}

                {/* Displays the benefits of buying our honey */}
                <Benefits />

                {/* Displays the About Us section */}
                <About/>
            </main>

            {/* Displays the website footer */}
            <Footer/>
        </>
    );
}

export default App;
