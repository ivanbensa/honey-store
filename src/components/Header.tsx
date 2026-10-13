function Header() {
    return(
        <header className="flex justify-between items-center p-6 bg-amber-50">
            <h2 className="text-2xl font-bold text-amber-600">Honey Store</h2>
            <nav className="flex gap-6 items-center">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About Us</a>
                <button className="
                bg-amber-500
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-amber-600
                cursor-pointer
                transition-colors"
                >🛒 0</button>
            </nav>
        </header>
    );
}

export default Header;