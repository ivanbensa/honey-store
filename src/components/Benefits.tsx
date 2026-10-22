// Stores the benefits displayed on the website
const benefits = [
    {
        icon: "🌿",
        title: "100% Natural",
        description: "No artificial additives"
    },
    {
        icon: "🚚",
        title: "Fast Delivery",
        description: "Fresh honey to your door"
    },
    {
        icon: "🛡️",
        title: "Premium Quality",
        description: "Carefully selected products"
    },
    {
        icon: "♡",
        title: "Customer Support",
        description: "We're here to help"
    }
];

function Benefits() {
    return (
        <section className="my-16 border-y border-amber-100 py-10">
            <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">

                {/* Loops through the benefits array and displays each benefit */}
                {benefits.map((benefit) => (
                    <div
                        key={benefit.title}
                        className="flex items-center gap-4"
                    >
                        <span className="text-3xl text-amber-700">
                            {benefit.icon}
                        </span>

                        <div>
                            <h3 className="font-serif text-sm sm:text-lg font-semibold text-stone-900">
                                {benefit.title}
                            </h3>

                            <p className="mt-1 text-xs sm:text-sm text-stone-500">
                                {benefit.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Benefits;
