// Understanding state: Send audio recording to process speech recognition
//  with wit.ai to analize and understand the user's input

// add listeners for send to Wit
$("#send-btn").click(function() {
    console.log(userRequest)
    useWit(userRequest);
});

function useWit(userRequest) {
    console.log("started using Wit function")

    // Understanding state: extract the intent and entities from 
    // the user's request in wit.ai
    // That is, turn the message into actionable search query
}



// Understanding state: transition to the "recipe search state"
// if the translation intent is detected via --> search.js
// otherwise request user to clarify/change the recipe question
