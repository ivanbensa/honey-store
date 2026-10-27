import ProductCard from "./ProductCard";
import type { Product } from "../types/products";
import type { CartItem } from "../types/cart";

// Defines the props required by the ProductSection component
interface ProductSectionProps {
    products: Product[];
    cart: CartItem[];
    search: string;
    onSearchChange: (value: string) => void;
    onAddToCart: (product: Product, origin: DOMRect) => void;
    onViewDetails: (product: Product) => void;
}

// Displays the product search and product cards
function ProductSection({
                            products,
                            cart,
                            search,
                            onSearchChange,
                            onAddToCart,
                            onViewDetails
                        }: ProductSectionProps) {
    return (
        <section id="products" className="mt-12 scroll-mt-24">

            <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="font-serif text-3xl font-bold text-stone-900">
                        Featured Honey
                    </h2>

                    <p className="mt-2 text-stone-600">
                        Discover our selection of natural honey.
                    </p>
                </div>

                {/* Product search input */}
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
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full rounded-xl border border-stone-300 bg-white py-3 pl-12 pr-5 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                    />
                </div>
            </div>

            {/* Displays products with their cart quantities */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        quantity={
                            cart.find(item => item.id === product.id)?.quantity ?? 0
                        }
                        onAddToCart={(origin) => onAddToCart(product, origin)}
                        onViewDetails={() => onViewDetails(product)}
                    />
                ))}
            </div>
        </section>
    );
}

export default ProductSection;