userRecipe = "lasagna"; // TODO uncomment when want to use user recipe request from audio
let recipeSearchResponse;  // intitialize global variable for 

// add listeners for recipe search
$("#search-btn").click(function () {
    recipeSearch();
});

function recipeSearch(){

    query = userRecipe;
    let recipesBody;
    let recipeOptions; // TODO uncomment when want to use user recipe request from input text or audio

    let AUTH = 'apiKey=3a12b110705e48fab6dd9e0ae25f9a15';
    let NUMBER = 'number=9'; // recipes search number
    const uri = 'https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&' + AUTH + '&' + NUMBER;

    // save to local storage last search recipeName, recipeId
    //  before writing over variable recipeSearchResponse
    if(recipeSearchResponse !== undefined){ // TODO uncomment this once figure how to check
        // console.log(recipeSearchResponse) // TODO uncomment when want to test
        // console.log('I am saving to local storage, YAY!') // TODO uncomment when want to test
        saveToLocalStorage(recipeSearchResponse); // TODO for empty variable
    }

    fetchData(uri).then(data => {
        // once fetch respond with data then run this code:
        recipeSearchResponse = data;
        console.log(data);

        document.querySelector("#recipeResultsList").classList.toggle("invisible"); // unhide answer buttons
        // showRecipeResult(recipeSearchResponse);

        for (let index = 0; index < recipeSearchResponse.results.length; index++) {

            // Concatenate the loop index with the class name
            let className1 = "#recipe-" + (index + 1) + " img";
            let className2 = "#recipe-" + (index + 1) + " h5";

            // Use the concatenated class name to select the appropriate element
            $(className1).attr("src", recipeSearchResponse.results[index].image);
            $(className2).text(recipeSearchResponse.results[index].title);
        }

        for (let index = 0; index < recipeSearchResponse.results.length; index++) {
            $('.card').each(function() {
                var recipeCardId = $(this).parent().attr("id");
                var resultsId = recipeSearchResponse.results[index].id;
                localStorage.setItem(recipeCardId, JSON.stringify(resultsId));
            });
        };
        
        localStorage.setItem("recipeInfo", JSON.stringify(recipeSearchResponse));
    });
}

// here we pass the url we want to call from API and await until fetch responds
async function fetchData(url) {
    const fetcher = await fetch(url)
    const data = await fetcher.json();
    return data;
}

//
// function saveToLocalStorage(recipesToSave) {
//     //add some functionality that saves recipes to local storage
//     // last search recipeName, recipeId
//     localStorage.setItem("recipeId", JSON.stringify(recipeSearchResponse));
    
// };

// saveToLocalStorage();

