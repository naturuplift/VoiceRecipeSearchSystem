let recipeSearchResponse;  // intitialize global variable for 

function searchRecipes(uri){
    // save to local storage last search recipeName, recipeId
    //  before writing over variable recipeSearchResponse
    // if(recipeSearchResponse is not empty){ // TODO uncomment this once figure how to check
    //     saveToLocalStorage(recipeSearchResponse); // TODO for empty variable
    // }

    fetchData(uri).then(data => {

        recipeSearchResponse = data;
        console.log('between for loop', recipeSearchResponse);
        showRecipeResult(recipeSearchResponse);

    for (let index = 0; index < recipeSearchResponse.results.length; index++) {
        // Concatenate the loop index with the class name
        let className1 = ".recipe-" + (index + 1) + " img";
        let className2 = ".recipe-" + (index + 1) + " h5";

        // Use the concatenated class name to select the appropriate element
        $(className1).attr("src", recipeSearchResponse.results[index].image);
        $(className2).text(recipeSearchResponse.results[index].title);
    }

    });
}

// here we pass the url we want to call from API
async function fetchData(url) {
    const fetcher = await fetch(url)
    const data = await fetcher.json();
    return data;
}