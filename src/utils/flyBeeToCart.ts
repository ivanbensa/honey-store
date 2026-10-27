import { animate } from "motion";

// Animates a bee flying from the clicked button to the cart
export function flyBeeToCart(start: DOMRect) {
    const target = Array.from(
        document.querySelectorAll<HTMLElement>("[data-cart-target]")
    ).find(element => element.getClientRects().length > 0);

    if (!target) return;

    // Respect reduced-motion accessibility preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const end = target.getBoundingClientRect();

    const bee = document.createElement("span");
    bee.textContent = "🐝";
    bee.setAttribute("aria-hidden", "true");

    const startX = start.left + start.width / 2;
    const startY = start.top + start.height / 2;
    const endX = end.left + end.width / 2;
    const endY = end.top + end.height / 2;

    Object.assign(bee.style, {
        position: "fixed",
        left: `${startX - 14}px`,
        top: `${startY - 14}px`,
        fontSize: "28px",
        zIndex: "9999",
        pointerEvents: "none"
    });

    document.body.appendChild(bee);

    const x = endX - startX;
    const y = endY - startY;

    // Bee flies in a curved path toward the cart
    animate(
        bee,
        {
            x: [0, x * 0.5, x],
            y: [0, y * 0.5 - 90, y],
            rotate: [0, -15, 10],
            scale: [0.8, 1.2, 0.4],
            opacity: [1, 1, 0]
        },
        {
            duration: 1.3,
            ease: "linear"
        }
    ).then(() => {
        bee.remove();

        // Cart bounces when the bee arrives
        animate(
            target,
            { scale: [1, 1.15, 1] },
            { duration: 0.3 }
        );
    });
}