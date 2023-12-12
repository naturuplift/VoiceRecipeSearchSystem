// Displaying state: present user with a list of
// relevant recipes options


// recipeOptions = searchRecipes(uri);
// console.log('Received recipeOptions', recipeOptions);

// startRecipeResult(recipeSearchResponse);

function startRecipeResult(recipeResult) {
    
    // document.querySelector("#result-recipe").classList.toggle("invisible"); // unhide answer buttons
    
    // console.log('Fetch Successful:',recipeResult)

    // setTimeout(showRecipeResult(recipeResult), 1000);
    // showRecipeResult(recipeResult) // TODO check if I need this 

// Displaying state: user selects a specific recipe or
// ask for more details


uri = 'https://api.spoonacular.com/recipes/648190/information?apiKey=3a12b110705e48fab6dd9e0ae25f9a15&includeNutrition=false'

    fetchData(uri).then(data => {
        // once fetch respond with data then run this code:
        recipeSearchResponse = data;
        console.log(data);

// TODO display to new html

    });

}

//Here may need to use modals to display different recipe options
// we we don't need retrieverecipe.js as the recipe is already retrieved


// here we pass the url we want to call from API and await until fetch responds



// Displaying state: transition to the "displaying state"
// if user selected recipe option via --> relevantrecipe.js
// otherwise user can mark recipe as not relevant (can be used
//  to train model. User need to modify/change question
