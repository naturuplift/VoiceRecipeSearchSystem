// userRecipe = "lasagna"; // TODO uncomment when want to use user recipe request from audio
let recipeSearchResponse;  // intitialize global variable for searching recipe options
let isFirstTime = true; // to toggle cards once

// searchRecipeOptions('GetRecipe','chicken soup noodles');

// In the function searchRecipeOptions, the first input is
// the type of recipe API call, second is the name of recipe or ingredients
// or null if looking for random recipe
function searchRecipeOptions(searchType,searchRecipe){

    // depending on user intent search recipe for type of search
    if (searchType === 'GetRecipe'){
        // for searchType GetRecipe fetch list of recipes
        console.log('Fetching GetRecipe types')
        getRecipeList(searchRecipe);
        
    } else if (searchType ===  'GetRecipeByIngredient') {
        // for searchType GetRecipeByIngredient fetch list of recipes
        console.log('Fetching GetRecipeByIngredient types')

    } else if (searchType === 'GetRandomRecipe') {
        // for searchType GetRandomRecipe fetch list of recipes
        console.log('Fetching GetRandomRecipe types')

    }
}

function getRecipeList(userRecipeList){

    let query = userRecipeList;
    let AUTH = 'apiKey=3a12b110705e48fab6dd9e0ae25f9a15';
    // let NUMBER = 'number=9'; // recipes search number
    // const uri = 'https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&' + AUTH + '&' + NUMBER;
    const uri = 'https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&' + AUTH;

    fetchData(uri).then(data => {
        // once fetch respond with data then run this code:
        recipeSearchResponse = data;
        console.log(data);
        // showRecipeResult(recipeSearchResponse);

        // if (isFirstTime) {

        //     // Remove the "invisible" class
        //     $("#recipeResultsList").removeClass("invisible");

        //     // // toggle card to be visible the fist time only
        //     // $("#recipeResultsList").toggleClass("invisible");
        //     isFirstTime = false;  // Update the flag
        // }

        for (let index = 0; index < recipeSearchResponse.results.length; index++) {

            var recipeCard = `
                <div class="col recipe-${index}" id="recipe-${index}">
                    <div class="card">
                        <img src="${recipeSearchResponse.results[index].image}">
                        <div class="card-body">
                            <h5 class="card-title">${recipeSearchResponse.results[index].title}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            `;

            $("#recipeResultsList").append(recipeCard);

            // Concatenate the loop index with the class name
            // let className1 = "#recipe-" + (index + 1) + " img";
            // let className2 = "#recipe-" + (index + 1) + " h5";

            // Use the concatenated class name to select the appropriate element
            // $(className1).attr("src", recipeSearchResponse.results[index].image);
            // $(className2).text(recipeSearchResponse.results[index].title);
            // $(className2).show(); // TODO check display of card
            // save each card to local 
            // save to local storage last search recipeName, recipeId
        }

        // for (let index = 0; index < recipeSearchResponse.results.length; index++) {
        //     $('.card').each(function() {
        //         var recipeCardId = $(this).parent().attr("id");
        //         var resultsId = recipeSearchResponse.results[index].id;
        //         localStorage.setItem(recipeCardId, JSON.stringify(resultsId));
        //     });
        // };
        
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

