// Understanding state: Send audio recording to process speech recognition
//  with wit.ai to analize and understand the user's input

// add listeners for send to Wit
$("#send-btn").click(function() {
    console.log(userRequest)
    useWit(userRequest);
});

// add global variable for user recipe intent
// to use the result of userRequest on search.js
let userIntent = ""; // intitialize it

// Use Wit.ai which is a natural language processing (NLP) platform
// - used for building applications that can understand and interpret human language
//  Goal is to train wit.ai applications to understand the intent behind user input
function useWit(userRequest) {
    console.log("started using Wit function")

//     $ curl \'https://api.wit.ai/message?v=20230215&q=hello' \
//   -H "Authorization: Bearer $TOKEN"

const q = encodeURIComponent('vegetable soup dish with ingretients such as tomatoes');
const uri = 'https://api.wit.ai/message?v=20231202&q=' + q;
const auth = 'Bearer ' + 'DO NOT EXPOSE TO PUBLIC!'; // TODO hide auth before pushing to git
fetch(uri, {headers: {Authorization: auth}})
  .then(res => res.json())
  .then(res => console.log(res))


    // Understanding state: extract the intent and entities from 
    // the user's request in wit.ai
    // That is, turn the message into actionable search query
}

// Understanding state: transition to the "recipe search state"
// if the translation intent is detected via --> search.js
// otherwise request user to clarify/change the recipe question
