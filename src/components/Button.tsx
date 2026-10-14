interface ButtonProps {
    text: string;
}

function Button({ text } : ButtonProps) {
    return(
        <button className="
                bg-amber-500
                text-white
                px-4
                py-2
                rounded-lg
                hover:bg-amber-600
                cursor-pointer
                transition-colors"
        >{ text }</button>
    );
}

export default Button;

