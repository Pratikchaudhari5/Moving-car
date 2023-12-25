// script.js

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get the audio element
    var backgroundMusic = document.getElementById('backgroundMusic');

    // Check if the element exists (not null) and if it is supported by the browser
    if (backgroundMusic && typeof backgroundMusic.play === 'function') {
        // Play the background music
        backgroundMusic.play();
    } else {
        console.error("Background music not supported or element not found.");
    }
});
