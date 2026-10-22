// Displays the About Us section with an image and information about our honey
function About() {
    return (
        <section
            id="about"
            className="my-20 scroll-mt-24"
        >
            <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-amber-50 p-6 md:grid-cols-2 md:p-12">

                <div>
                    <img
                        src={`${import.meta.env.BASE_URL}images/honey.webp`}
                        alt="Pure natural honey"
                        className="h-72 w-full rounded-2xl object-cover md:h-96"
                    />
                </div>

                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700">
                        Our Story
                    </p>

                    <h2 className="mb-5 font-serif text-3xl font-bold text-stone-900 md:text-4xl">
                        From Nature,
                        <br/>
                        With Love
                    </h2>

                    <p className="mb-5 leading-relaxed text-stone-600">
                        We believe that the best honey comes straight
                        from nature. Our passion is bringing pure,
                        carefully harvested honey to your table.
                    </p>

                    <p className="leading-relaxed text-stone-600">
                        Every jar represents our dedication to quality,
                        tradition and the natural goodness of honey.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default About;
