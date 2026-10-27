import type { MouseEventHandler } from "react";

// Defines the types of props accepted by the Button component
interface ButtonProps {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: "primary" | "secondary";
}

function Button({
                    text,
                    onClick,
                    variant = "primary"
                }: ButtonProps) {

    // Selects button styles based on the selected variant
    const variantClasses = variant === "primary"
        ? "bg-amber-400 text-stone-950 hover:bg-amber-500"
        : "bg-white text-amber-700 border border-amber-400 hover:bg-amber-50";

    // Renders a reusable button with dynamic styles and a click handler
    return (
        <button
            onClick={onClick}
            className={`
                px-5 py-3
                rounded-lg
                font-medium
                cursor-pointer
                transition-colors
                ${variantClasses}
            `}
        >
            {text}
        </button>
    );
}

export default Button;

