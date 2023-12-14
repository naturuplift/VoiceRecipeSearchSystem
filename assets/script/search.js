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
        getRecipeList(searchRecipe); // TODO enable when done working with other function calls
        
    } else if (searchType ===  'GetRecipeByIngredient') {
        // for searchType GetRecipeByIngredient fetch list of recipes
        console.log('Fetching GetRecipeByIngredient types')
        $("#recipeResultsList").empty();
        // getRecipeByIngredients(searchRecipe);  // TODO enable when done working with other function calls

    } else if (searchType === 'GetRandomRecipe') {
        // for searchType GetRandomRecipe fetch list of recipes
        console.log('Fetching GetRandomRecipe types')
        $("#recipeResultsList").empty();
        getRandomRecipe();  // TODO enable when done working with other function calls
    }
}

// search for a list of recipes with query userRecipeList
// https://spoonacular.com/food-api/docs#Search-Recipes-Complex
function getRecipeList(userRecipeList){

    // configure recipe API method and parameters
    let query = userRecipeList;
    let AUTH = 'apiKey=9cf7f51e45f542c98bb4360739b56ced';
    const uri = 'https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&' + AUTH;

    fetchData(uri).then(data => {
        // once fetch respond with data then run this code:
        recipeSearchResponse = data;
        
        // console.log(data); // TODO uncomment to confirm recipes are returned for API recipe query

        // Store data in local storage
        localStorage.setItem('recipeData', JSON.stringify(recipeSearchResponse.results));
        $('#recipeResultsList').removeClass('hide');

        // let tilteRecipesFound = `<h2 class="card-title">Recipes Found</h2>`;
        // $(".title-before-cards").removeClass('hide');
        // $(".title-before-cards").prepend(tilteRecipesFound);

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
                // The click event handling for recipe
                console.log(`Card ${index + 1} clicked, with id ${recipeSearchResponse.results[index].id} on recipe ${recipeSearchResponse.results[index].title}!`)
                // call recipe fetch in relevantrecipe'js to show recipe to user
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

// search for a list of recipes given ingredients in userIngredientsList
// https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients
function getRecipeByIngredients(userIngredientsList){

    // configure recipe API method and parameters
    let recipeIngredients = userIngredientsList;
    let recipeParameters = 'fillIngredients=false&ignorePantry=true';
    let AUTH = 'apiKey=9cf7f51e45f542c98bb4360739b56ced';
    const uri = 'https://api.spoonacular.com/recipes/findByIngredients?' + AUTH + '&' + 'ingredients=' + recipeIngredients + '&' + recipeParameters;

    // console.log(uri)

    fetchData(uri).then(data => {
        // once fetch respond with data then run this code:
        recipeSearchResponse = data;
        console.log(data);

        // Store data in local storage
        localStorage.setItem('recipeData', JSON.stringify(recipeSearchResponse));

        for (let index = 0; index < recipeSearchResponse.length; index++) {

            // created card into html and add recipe picture and title
            var recipeCard = `
                <div class="col recipe-${index}" id="recipe-${index}">
                    <div class="card">
                        <img src="${recipeSearchResponse[index].image}">
                        <div class="card-body">
                            <h5 class="card-title">${recipeSearchResponse[index].title}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            `;

            $("#recipeResultsList").append(recipeCard);

            let indexClick = `.recipe-${index}`;
            // Here adding a click event listener to the card
            $(indexClick).on('click', function() {
                // The click event handling for recipe
                console.log(`Card ${index + 1} clicked, with id ${recipeSearchResponse[index].id} on recipe ${recipeSearchResponse[index].title}!`)
                // call recipe fetch in relevantrecipe'js to show recipe to user
                recipeInfoFetch(recipeSearchResponse[index].id);
            });
        }
    });
}

// search for a list of recipes with query userRecipeList
function getRandomRecipe(){

    // configure recipe API method and parameters
    let number = 'number=6';
    let AUTH = 'apiKey=9cf7f51e45f542c98bb4360739b56ced';
    const uri = 'https://api.spoonacular.com/recipes/random?' + AUTH + '&' + number;

    fetchData(uri).then(data => {
        // once fetch respond with data then run this code:
        recipeSearchResponse = data;
        console.log(data);

        // create container element to save to local storage
        let recipeElements = [];

        for (let index = 0; index < recipeSearchResponse.recipes.length; index++) {
            let recipe = recipeSearchResponse.recipes[index]; // Access the current recipe using the index
        
            let recipeElement = {
                "id": recipe.id,
                "title": recipe.title,
                "image": recipe.image
            };
            recipeElements.push(recipeElement); // Add the current recipe element to the array
        }

        // Store data in local storage
        localStorage.setItem('recipeData', JSON.stringify(recipeElements));

        for (let index = 0; index < recipeSearchResponse.recipes.length; index++) {

            // created card into html and add recipe picture and title
            var recipeCard = `
                <div class="col recipe-${index}" id="recipe-${index}">
                    <div class="card">
                        <img src="${recipeSearchResponse.recipes[index].image}">
                        <div class="card-body">
                            <h5 class="card-title">${recipeSearchResponse.recipes[index].title}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            `;

            $("#recipeResultsList").append(recipeCard);
            
            let indexClick = `.recipe-${index}`;
            // Here adding a click event listener to the card
            $(indexClick).on('click', function() {
                // The click event handling for recipe
                console.log(`Card 1 clicked, with id ${recipeSearchResponse.recipes[index].id} on recipe ${recipeSearchResponse.recipes[index].title}!`)
                // call recipe fetch in relevantrecipe'js to show recipe to user
                recipeInfoFetch(recipeSearchResponse.recipes[index].id);
            });
        }
    });
}