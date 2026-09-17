// Wait for the button to be clicked
document.getElementById("tap-here-btn").addEventListener("click", function() {
    // Scroll smoothly to the second page
    document.getElementById("second-page").scrollIntoView({ 
        behavior: "smooth" 
    });
});