// Displays the website footer with navigation links and information
function Footer() {
    return (
        <footer className="mt-20 bg-stone-900 text-stone-300 rounded-t-3xl">
            <div className="max-w-7xl mx-auto px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-2xl font-bold text-amber-400 mb-4">
                            🐝 Honey Store
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Pure, natural honey made with love.
                            Bringing nature's sweetness to your home.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Quick Links
                        </h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <a href="#" className="hover:text-amber-400">Home</a>
                            <a href="#products" className="hover:text-amber-400">Products</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">
                            Why Choose Us?
                        </h3>
                        <p className="text-sm">
                            100% Natural Honey
                        </p>
                        <p className="text-sm mt-2">
                            Carefully Harvested
                        </p>
                        <p className="text-sm mt-2">
                            Premium Quality
                        </p>
                    </div>

                </div>

                {/* Automatically displays the current year */}
                <div className="border-t border-stone-700 mt-10 pt-6 text-center text-sm">
                    © {new Date().getFullYear()} Honey Store. All rights reserved.
                </div>

            </div>
        </footer>
    );
}

export default Footer;