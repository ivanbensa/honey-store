import {useState} from "react";
import Button from "./Button";

// Defines the props required by the Header component
interface HeaderProps {
    cartCount: number;
    onCartClick: () => void;
}

function Header({cartCount, onCartClick}: HeaderProps) {

    // Controls whether the mobile navigation menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 border-b border-amber-100 bg-amber-50 shadow-sm">

            <div className="flex items-center justify-between gap-3 px-4 py-4 md:px-6">

                <a
                    href="#"
                    className="text-xl font-bold text-amber-800 md:text-2xl"
                >
                    🐝 Honey Store
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    <a href="#" className="hover:text-amber-600">
                        Home
                    </a>

                    <a href="#products" className="hover:text-amber-600">
                        Products
                    </a>

                    <a href="#about" className="hover:text-amber-600">
                        About Us
                    </a>
                </nav>

                <div className="flex items-center gap-2">

                    {/* Desktop cart */}
                    <div className="hidden sm:block">
                        <Button
                            text={`🛒 Your Cart: ${cartCount}`}
                            onClick={onCartClick}
                        />
                    </div>

                    {/* Mobile cart */}
                    <button
                        type="button"
                        onClick={onCartClick}
                        aria-label={`Open cart, ${cartCount} items`}
                        className="rounded-lg bg-amber-400 px-3 py-2 font-semibold text-stone-950 sm:hidden"
                    >
                        🛒 {cartCount}
                    </button>

                    {/* Toggles the mobile navigation menu */}
                    <button
                        type="button"
                        aria-label="Toggle navigation"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="rounded-lg border border-amber-200 px-3 py-2 text-xl text-stone-800 md:hidden"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Displays mobile navigation only when the menu is open */}
            {menuOpen && (
                <nav
                    id="mobile-navigation"
                    className="flex flex-col gap-4 border-t border-amber-200 bg-amber-50 px-6 py-5 md:hidden"
                >
                    <a href="#" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>

                    <a href="#products" onClick={() => setMenuOpen(false)}>
                        Products
                    </a>

                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About Us
                    </a>
                </nav>
            )}

        </header>
    );
}

export default Header;
