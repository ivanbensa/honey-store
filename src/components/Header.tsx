import Button from "./Button";

interface HeaderProps {
    cartCount: number
}

function Header({cartCount}: HeaderProps) {
    return(
        <header className="flex justify-between items-center p-6 bg-amber-50">
            <h2 className="text-2xl font-bold text-amber-600">Honey Store</h2>
            <nav className="flex gap-6 items-center">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <Button text={`🛒 ${cartCount}`} />
            </nav>
        </header>
    );
}



export default Header;