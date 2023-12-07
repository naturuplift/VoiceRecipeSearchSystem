// Displaying state: present user with a list of
// relevant recipes options

let recipeOptions; // TODO uncomment when want to use user recipe request from audio



function startRecipeResult(recipeResult) {
    
    // document.querySelector("#result-recipe").classList.toggle("invisible"); // unhide answer buttons
    document.querySelector("#recipeResultsList").classList.toggle("invisible"); // unhide answer buttons
    console.log('Fetch Successful:',recipeResult)

    // setTimeout(showRecipeResult(recipeResult), 1000);
    showRecipeResult(recipeResult)
}

// Displaying state: user selects a specific recipe or
// ask for more details
function showRecipeResult(RecipeOpions) {

    recipeOptions = RecipeOpions;
        
    $("#recipe-1 img").attr("src",recipeOptions.results[0].image);
    $("#recipe-1 h5").text(recipeOptions.results[0].title);
    $("#recipe-2 img").attr("src",recipeOptions.results[1].image);
    $("#recipe-2 h5").text(recipeOptions.results[1].title);
    $("#recipe-3 img").attr("src",recipeOptions.results[2].image);
    $("#recipe-3 h5").text(recipeOptions.results[2].title);
    $("#recipe-4 img").attr("src",recipeOptions.results[3].image);
    $("#recipe-4 h5").text(recipeOptions.results[3].title);
    $("#recipe-5 img").attr("src",recipeOptions.results[4].image);
    $("#recipe-5 h5").text(recipeOptions.results[4].title);
    $("#recipe-6 img").attr("src",recipeOptions.results[5].image);
    $("#recipe-6 h5").text(recipeOptions.results[5].title);
    $("#recipe-7 img").attr("src",recipeOptions.results[6].image);
    $("#recipe-7 h5").text(recipeOptions.results[6].title);
    $("#recipe-8 img").attr("src",recipeOptions.results[7].image);
    $("#recipe-8  h5").text(recipeOptions.results[7].title);
    $("#recipe-9 img").attr("src",recipeOptions.results[8].image);
    $("#recipe-9  h5").text(recipeOptions.results[8].title);
    $("#recipe-10 img").attr("src",recipeOptions.results[9].image);
    $("#recipe-10  h5").text(recipeOptions.results[9].title);
    
    

    // recipeOptions = RecipeOpions;
    // for (i = 0; i < RecipeOpions.length; i++) {
    //     console.log('loop # ')
    //     buttonId = '.btn1';
    //     console.log('buttonId')
    //     $(buttonId).show();
    //     let resultTitle = $(buttonId);
    //     resultTitle.text(recipeOptions.results[i].title);
    //     // resultTitle.addClass('btn');
    //     // resultTitle.addClass('btn-outline-secondary');
    //     // resultTitle.attr('data-toggle', 'modal');
    //     // resultTitle.attr('data-target', '#exampleModalCenter');
    //     // resultButtonContainer.append(resultTitle);
    // };
    };

//Here may need to use modals to display different recipe options
// we we don't need retrieverecipe.js as the recipe is already retrieved
showRecipeResult();



// Displaying state: transition to the "displaying state"
// if user selected recipe option via --> relevantrecipe.js
// otherwise user can mark recipe as not relevant (can be used
//  to train model. User need to modify/change question
