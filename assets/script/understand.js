// add global variable for user recipe intent
// to use the result of userRequest on search.js
let userRecipe; // intitialize global variable

// getUserRecepy("Give me instructions on making lasagna");// TODO to comment when done testing

// Use Wit.ai which is a natural language processing (NLP) platform
// - used for building applications that can understand and interpret human language
//  Goal is to train wit.ai applications to understand the intent behind user input
function getUserRecepy(userRequest) {

// console.log("started using Wit function") // TODO to comment when functions working

//  $ curl \'https://api.wit.ai/message?v=20230215&q=hello' \
//  -H "Authorization: Bearer $TOKEN"

const question = encodeURIComponent(userRequest);
const uri = 'https://api.wit.ai/message?v=20231202&q=' + question;
const auth = 'Bearer ' + 'V3EZPKQJCUMULEEUOE3WLKPSUMO7HMSP'; // TODO hide auth before pushing to git
fetch(uri, {headers: {Authorization: auth}})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
            console.log(data)  // TODO to comment when functions working
            console.log(data.entities["dish:dish"][0].body)  // TODO to comment when functions working
            const dishBody = data.entities["dish:dish"][0].body;
            userRecipe = dishBody;
    });
    // Understanding state: extract the intent and entities from 
    // the user's request in wit.ai
    // That is, turn the message into actionable search query
}
// Understanding state: transition to the "recipe search state"
// if the translation intent is detected via --> search.js
// otherwise request user to clarify/change the recipe question