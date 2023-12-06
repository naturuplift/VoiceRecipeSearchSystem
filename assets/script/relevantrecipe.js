// Displaying state: present user with a list of
// relevant recipes options

let recipeOptions; // TODO uncomment when want to use user recipe request from audio

function startRecipeResult(recipeResult) {
    
    // document.querySelector("#result-recipe").classList.toggle("invisible"); // unhide answer buttons
    document.querySelector("#recipeResultsList").classList.toggle("invisible"); // unhide answer buttons
    console.log('Fetch Successful:',recipeResult)

    showRecipeResult(recipeResult)
}

// Displaying state: user selects a specific recipe or
// ask for more details
function showRecipeResult(RecipeOpions) {

    recipeOptions = RecipeOpions;
    $(".recipe-1 img").attr("src",recipeOptions.results[0].image);
    $(".recipe-1 h5").text(recipeOptions.results[0].title);
    // $(".btn2").text(recipeOptions.results[1].title);
    // $(".btn3").text(recipeOptions.results[2].title);
    // $(".btn4").text(recipeOptions.results[3].title);
    // $(".btn5").text(recipeOptions.results[4].title);
    // $(".btn6").text(recipeOptions.results[5].title);

    

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
}

//Here may need to use modals to display different recipe options
// we we don't need retrieverecipe.js as the recipe is already retrieved




// Displaying state: transition to the "displaying state"
// if user selected recipe option via --> relevantrecipe.js
// otherwise user can mark recipe as not relevant (can be used
//  to train model. User need to modify/change question
