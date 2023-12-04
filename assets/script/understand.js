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


// Response to good query:
// GET https://api.wit.ai/message?v=20231203&q=Find%20me%20an%20easy%20recipe%20for%20chicken%20curry

// {
//     "entities": {
//         "dish:dish": [
//             {
//                 "body": "curry",
//                 "confidence": 1,
//                 "end": 40,
//                 "entities": {},
//                 "id": "862527508704425",
//                 "name": "dish",
//                 "role": "dish",
//                 "start": 35,
//                 "type": "value",
//                 "value": "dish"
//             }
//         ],
//         "ingredient:ingredient": [
//             {
//                 "body": "chicken",
//                 "confidence": 1,
//                 "end": 34,
//                 "entities": {},
//                 "id": "880235700091364",
//                 "name": "ingredient",
//                 "role": "ingredient",
//                 "start": 27,
//                 "type": "value",
//                 "value": "ingredient"
//             }
//         ]
//     },
//     "intents": [],
//     "text": "Find me an easy recipe for chicken curry",
//     "traits": {}
// }


// Response to bad query:
// GET https://api.wit.ai/message?v=20231203&q=I%20want%20to%20buy%20a%20ford%20mustang%20with%205%20liter%20engine

// {
//     "entities": {},
//     "intents": [],
//     "text": "I want to buy a ford mustang with 5 liter engine",
//     "traits": {}
// }


// Understanding state: transition to the "recipe search state"
// if the translation intent is detected via --> search.js
// otherwise request user to clarify/change the recipe question
