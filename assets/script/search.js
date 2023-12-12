// userRecipe = "lasagna"; // TODO uncomment when want to use user recipe request from audio
let recipeSearchResponse;  // intitialize global variable for searching recipe options
// searchRecipeOptions('GetRecipe','chicken soup noodles'); // use when testing without user input

// In the function searchRecipeOptions, the first input is
// the type of recipe API call, second is the name of recipe or ingredients
// or null if looking for random recipe
function searchRecipeOptions(searchType,searchRecipe){

    // depending on user intent search recipe for type of search
    if (searchType === 'GetRecipe'){
        // for searchType GetRecipe fetch list of recipes
        console.log('Fetching GetRecipe types')
        $("#recipeResultsList").empty();
        getRecipeList(searchRecipe);
        
    } else if (searchType ===  'GetRecipeByIngredient') {
        // for searchType GetRecipeByIngredient fetch list of recipes
        console.log('Fetching GetRecipeByIngredient types')
        $("#recipeResultsList").empty();

    } else if (searchType === 'GetRandomRecipe') {
        // for searchType GetRandomRecipe fetch list of recipes
        console.log('Fetching GetRandomRecipe types')
        $("#recipeResultsList").empty();

    }
}

// search for a list of recipes with query userRecipeList
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

        // Store data in local storage
        localStorage.setItem('recipeData', JSON.stringify(recipeSearchResponse.results));

        for (let index = 0; index < recipeSearchResponse.results.length; index++) {

            // created card into html and add recipe picture and title
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

            let indexClick = `.recipe-${index}`;
            // Here adding a click event listener to the card
            $(indexClick).on('click', function() {
                // Your click event handling code goes here
                console.log(`Card ${index + 1} clicked on recipe ${recipeSearchResponse.results[index].title}!`)
                recipeInfoFetch(recipeSearchResponse.results[index].id);
            });
        }
    });
}

// here we pass the url we want to call from API and await until fetch responds
async function fetchData(url) {
    const fetcher = await fetch(url)
    const data = await fetcher.json();
    return data;
}