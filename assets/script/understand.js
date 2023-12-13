// add global variable for user recipe intent
// to use the result of userRequest on search.js
let userRecipe; // intitialize global variable
let userIntent; // intitialize global variable
let userWitSearch; // intitialize global Wit variable
// getUserRecipe("Give me instructions on making lasagna");// TODO to comment when done testing

// add listeners for recipe search
$("#search-btn").click(function () {

    // read text input from user
    var searchInputValue = $('#exampleFormControlTextarea1').val();

    // check if there is text to search for recipe
    if (searchInputValue.length > 0) {
        getUserRecipe(searchInputValue);
    }
});

// Use Wit.ai which is a natural language processing (NLP) platform
// - used for building applications that can understand and interpret human language
//  Goal is to train wit.ai applications to understand the intent behind user input
function getUserRecipe(userRecipeRequest) {

console.log("started using Wit function") // TODO to comment when functions working

//  $ curl \'https://api.wit.ai/message?v=20230215&q=hello' \
//  -H "Authorization: Bearer $TOKEN"

const question = encodeURIComponent(userRecipeRequest);
const uri = 'https://api.wit.ai/message?v=20231202&q=' + question;
const auth = 'Bearer ' + 'V3EZPKQJCUMULEEUOE3WLKPSUMO7HMSP'; // TODO hide auth before pushing to git

fetch(uri, {headers: {Authorization: auth}})
    .then(function(response) {
        return response.json();
    })

// Understanding state: extract the intent and entities from 
    // the user's request in wit.ai
    // That is, turn the message into actionable search query for recipe
    .then(function(data) {
        
        console.log(data)  // TODO to comment when functions working

        userWitSearch = data; // save Wit result to global variable

        // console.log(userWitSearch.intents[0].name,userWitSearch.entities["dish:dish"][0].body) // TODO to comment when functions working

        // if intent is for a random recipe do this
        if (userWitSearch.intents[0].name === "GetRandomRecipe") {
            // get Intent
            userIntent = userWitSearch.intents[0].name; // TODO delete this
            console.log(userIntent)
            userRecipe = 'dummyrecipe'; // this is for random recipe so it doesn't matter
            console.log('Wit dish functionality')  // TODO to comment when functions working
            // Understanding state transition to the "recipe search state"
            searchRecipeOptions(userIntent,userRecipe);

        } else if (Object.keys(userWitSearch.entities).length === 0) { // anything else ask user to input recipe

            // console.log(userWitSearch.entities)
            console.log('Not a valid recipe entered. Try Again!')

        } else if (userWitSearch.intents[0].name === "GetRecipe" && Object.keys(userWitSearch.entities).length !== 0){ //use intent GetRecipe
            
            // get Intent
            userIntent = userWitSearch.intents[0].name; // TODO delete this
            console.log(userIntent)
            // userIntent = 'GetRandomRecipe'; // TODO delete this 💩
            // get recipe
            userRecipe = userWitSearch.entities["dish:dish"][0].body;
            console.log(userRecipe)

            console.log('Wit dish functionality')  // TODO to comment when functions working
            // Understanding state transition to the "recipe search state"
            searchRecipeOptions(userIntent,userRecipe);              
        }
    });
}

// if the translation intent is detected via --> search.js
// otherwise request user to clarify/change the recipe question