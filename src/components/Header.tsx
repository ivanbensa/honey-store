import Button from "./Button";

interface HeaderProps {
    cartCount: number;
    onCartClick: () => void;
}

function Header({ cartCount, onCartClick }: HeaderProps) {
    return (
        <header className="
            flex items-center justify-between
            bg-amber-50 px-6 py-5
            border-b border-amber-100
        ">
            <a
                href="#"
                className="text-2xl font-bold text-amber-800"
            >
                🐝 Honey Store
            </a>

            <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="hover:text-amber-600">
                    Home
                </a>

                <a href="#products" className="hover:text-amber-600">
                    Products
                </a>

                <a href="#" className="hover:text-amber-600">
                    About Us
                </a>
            </nav>

            <Button
                text={`🛒 ${cartCount}`}
                onClick={onCartClick}
            />
        </header>
    );
}

export default Header;