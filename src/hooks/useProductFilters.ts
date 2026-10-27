import { useState } from "react";
import { products } from "../data/products";

// Manages product search and category filtering
export function useProductFilters() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    // Filters products by search text and selected category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    return {
        search,
        setSearch,
        category,
        setCategory,
        filteredProducts
    };
}