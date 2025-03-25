document.addEventListener("DOMContentLoaded", () => {
    const numFireflies = 30; // Ilang fireflies ang gusto mo

    for (let i = 0; i < numFireflies; i++) {
        createFirefly();
    }
});

function createFirefly() {
    const firefly = document.createElement("div");
    firefly.classList.add("firefly");

    // Random na posisyon sa buong screen
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    firefly.style.left = `${x}px`;
    firefly.style.top = `${y}px`;

    document.body.appendChild(firefly);

    animateFirefly(firefly);
}

function animateFirefly(firefly) {
    // Gumawa ng random animation name
    const animationName = `moveFirefly${Math.random().toString(36).substr(2, 5)}`;

    // Balance left & right movement
    const movementPattern = getBalancedPattern();

    // Gumawa ng bagong animation keyframes
    const keyframes = `
        @keyframes ${animationName} {
            0% { transform: translate(0, 0); }
            25% { transform: translate(${movementPattern[0].x}px, ${movementPattern[0].y}px); }
            50% { transform: translate(${movementPattern[1].x}px, ${movementPattern[1].y}px); }
            75% { transform: translate(${movementPattern[2].x}px, ${movementPattern[2].y}px); }
            100% { transform: translate(0, 0); }
        }
    `;

    // Gumawa ng bagong <style> at idagdag sa <head>
    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    // Apply animation sa firefly
    firefly.style.animation = `glow 1.5s infinite alternate, ${animationName} ${randomRange(5, 12)}s linear infinite`;
}

// Function para sa balanced movement pattern
function getBalancedPattern() {
    // Para siguradong equal ang left at right movement
    const side = Math.random() > 0.5 ? 1 : -1; // 50% chance left (-1) or right (1)

    return [
        {x: side * randomRange(50, 150), y: randomRange(-100, 100)}, 
        {x: side * randomRange(-150, 200), y: randomRange(50, -50)}, 
        {x: side * randomRange(100, -100), y: randomRange(100, -100)}
    ];
}

// Helper function para sa random range
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
