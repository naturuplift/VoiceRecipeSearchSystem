// 
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const resultDiv = document.getElementById('result');

    // Check if the browser supports the SpeechRecognition API
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        recognition.lang = 'en';

        recognition.onstart = () => {
            resultDiv.textContent = 'Listening...';
        };

        
    } else {
        resultDiv.textContent = 'Speech recognition is not supported in this browser.';
    }

    function searchRecipes(ingredient,) {
        // Placeholder function for searching recipes based on the ingredient
        // You would typically integrate with a recipe API at this point
        resultDiv.textContent = `Searching recipes with ${ingredient}...`;
        // Perform your recipe search and display the results
        // Replace the following line with actual API calls and result handling
        setTimeout(() => {
            resultDiv.textContent = `Displaying recipes with ${ingredient}.`;
        }, 5000);
    }
});