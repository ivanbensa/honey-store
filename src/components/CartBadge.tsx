import { motion } from "motion/react";

interface CartBadgeProps {
    quantity: number;
}

// Displays an animated quantity badge
function CartBadge({ quantity }: CartBadgeProps) {
    if (quantity === 0) return null;

    return (
        <motion.span
            key={quantity}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: [0.5, 1.3, 1], opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="
                pointer-events-none absolute -right-2 -top-2 z-10
                flex h-6 min-w-6 items-center justify-center
                rounded-full bg-red-600 px-1
                text-xs font-bold text-white shadow-md
            "
        >
            {quantity}
        </motion.span>
    );
}

export default CartBadge;