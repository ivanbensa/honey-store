// Defines the props required by the Categories component
interface CategoriesProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

// Stores all available product categories
const categories = [
    {name: "All Products", value: "All", icon: "🍯"},
    {name: "Single-Flower Honey", value: "Monofloral", icon: "🌼"},
    {name: "Wildflower Honey", value: "Polyfloral", icon: "🌸"},
    {name: "Forest Honey", value: "Forest", icon: "🌲"}
];

function Categories({selectedCategory, onCategoryChange}: CategoriesProps) {
    return (
        <section className="my-10">
            <h2 className="mb-6 font-serif text-2xl font-bold text-stone-900">
                Explore Our Categories
            </h2>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                {/* Displays category buttons and highlights the selected category */}
                {categories.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => onCategoryChange(item.value)}
                        className={`
                            flex items-center gap-4 rounded-xl
                            border p-5 text-left
                            cursor-pointer transition-all
                            hover:-translate-y-1 hover:shadow-md
                            ${selectedCategory === item.value
                            ? "border-amber-500 bg-amber-100"
                            : "border-amber-100 bg-amber-50"}
                        `}
                    >
                        <span className="text-4xl">{item.icon}</span>

                        <span className="font-semibold text-stone-800">
                            {item.name} →
                        </span>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Categories;