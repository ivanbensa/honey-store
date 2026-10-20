function Hero() {
    return (
        <section className="
            my-8 overflow-hidden rounded-3xl
            bg-gradient-to-r from-stone-900 via-amber-950 to-stone-800
            text-white
        ">
            <div className="
                grid grid-cols-1 md:grid-cols-2
                items-center gap-10
                px-8 py-12 md:px-16 md:py-16
            ">

                {/* LEFT SIDE */}
                <div>
                    <p className="
                        mb-4 text-sm font-semibold uppercase
                        tracking-widest text-amber-300
                    ">
                        Pure • Natural • Local
                    </p>

                    <h1 className="
                        mb-6 font-serif text-4xl
                        md:text-6xl font-bold leading-tight
                    ">
                        Pure Honey,
                        <br />
                        Naturally Made
                    </h1>

                    <p className="
                        mb-8 max-w-lg text-lg
                        leading-relaxed text-stone-200
                    ">
                        Discover the natural sweetness of our premium honey,
                        carefully harvested from nature.
                    </p>

                    <a
                        href="#products"
                        className="
                            inline-block rounded-xl
                            bg-amber-400 px-8 py-4
                            font-semibold text-stone-950
                            transition-colors hover:bg-amber-500
                        "
                    >
                        Shop Our Honey →
                    </a>

                    <div className="
                        mt-10 flex flex-wrap gap-6
                        text-sm text-stone-200
                    ">
                        <span>✓ 100% Natural</span>
                        <span>✓ Premium Quality</span>
                        <span>✓ Carefully Harvested</span>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex justify-center">
                    <img
                        src={`${import.meta.env.BASE_URL}images/honey.webp`}
                        alt="Natural honey"
                        className="
                            h-80 w-full max-w-sm
                            rounded-2xl object-cover
                            shadow-2xl md:h-96
                        "
                    />
                </div>

            </div>
        </section>
    );
}

export default Hero;