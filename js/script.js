document.addEventListener('DOMContentLoaded', () => {
    const animatedText = document.getElementById('animated-text');
    const messages = [
        "Welcome to DamnBros",
        "Step Into Style",
        "Shop Now at DamnBros!"
    ];
    
    let messageIndex = 0;

    // Function to update text
    function updateText() {
        animatedText.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }

    // Update text immediately on page load
    updateText();
    
    // Set interval to change text every 3 seconds
    setInterval(updateText, 3000);
});

//Added to cart alert
document.getElementById("cartIcon").addEventListener("click", function () {
    alert("Added to Cart!");
});
