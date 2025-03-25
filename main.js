// Ensure Fireflies Appear After Flower Animation
window.onload = () => {
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
        generateFireflies(); // Ensure fireflies appear after animation
    }, 1000);
};

// Function to Generate Fireflies
function generateFireflies() {
    const numFireflies = 20; // Adjust number of fireflies
    const body = document.body;
    
    for (let i = 0; i < numFireflies; i++) {
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");
        body.appendChild(firefly);

        // Random starting position
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;

        // Make Fireflies Clickable
        firefly.addEventListener("click", () => {
            firefly.classList.add("disappear"); // Add animation class
            setTimeout(() => {
                firefly.remove(); // Remove from DOM
            }, 500);
        });

        animateFirefly(firefly);
    }
}

// Function to Animate Fireflies with Random Motion
function animateFirefly(firefly) {
    let xMove = (Math.random() - 0.5) * 200; // Random movement range
    let yMove = (Math.random() - 0.5) * 200;
    let duration = Math.random() * 5 + 3; // Random duration

    firefly.animate([
        { transform: `translate(0, 0)`, opacity: 1 },
        { transform: `translate(${xMove}px, ${yMove}px)`, opacity: 0.8 }
    ], {
        duration: duration * 1000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out"
    });
}
