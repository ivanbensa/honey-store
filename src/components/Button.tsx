interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}

function Button({
                    text,
                    onClick,
                    variant = "primary"
                }: ButtonProps) {

    const variantClasses = variant === "primary"
        ? "bg-amber-400 text-stone-950 hover:bg-amber-500"
        : "bg-white text-amber-700 border border-amber-400 hover:bg-amber-50";

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

