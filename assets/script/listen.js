// Listening state (speech recognition):
// - activated when user click record "use your voice"
// - Use web speech api - speech recognition and speech
// synthesis to convert spoken words into text
// - transition to the " understanding state"
// if a translation intent is detected via --> understand.js

// include these lines to allow for both prefixed properties
//  and unprefixed versions that may be supported in future
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

// add listeners for record audio
$("#record-btn").click(function () {
  recordRecipe();
});

// add global variable for recognized speech
// to use the result of userRequest on understand.js
let userRequest = ""; // intitialize it

// record voice audio for recipe using  Web Speech API
// provides: speech recognition, and speech synthesis
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
function recordRecipe() {

    // check for web speech API and show user error if not supported
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
        // define a speech recognition instance to control
        //  the recognition for our application
        const recognition = new SpeechRecognition();
        const speechRecognitionList = new SpeechGrammarList();

        // SpeechRecognition.continuous: Controls whether continuous
        //  results are captured (true), or just a single result
        //  each time recognition is started (false)
        recognition.continuous = false;
        // SpeechRecognition.lang: Sets the language of the recognition.
        //  Setting this is good practice, and therefore recommended.
        recognition.lang = "en-US";
        // SpeechRecognition.interimResults: Defines whether the speech
        //  recognition system should return interim results, or just
        // final results. Final results are good enough for this simple demo.
        recognition.interimResults = false;
        // not using grammar as to not limit speech to specific grammar list
        recognition.grammars = speechRecognitionList;
        // SpeechRecognition.maxAlternatives: Sets the number of alternative
        // potential matches that should be returned per result.
        recognition.maxAlternatives = 1;

        // the speech recognition service start
        recognition.start();
        console.log("Start recording voice");

        // clear the text result on the page
        $("#response").text("");

        // Once the speech recognition is started,
        // handle the result of speech recognition
        recognition.onresult = (event) => {
            const recognizedSpeech = event.results[0][0].transcript;
            console.log("Speech Recognition Result:", recognizedSpeech);

            // set to result of speech recognition to glabal variable
            userRequest = recognizedSpeech;

            // Display the recognized text on the page
            $("#exampleFormControlTextarea1").text(recognizedSpeech);

            // understand recipe
            console.log(userRequest.length)
            if (userRequest.length > 0) {// don't return anything for empty
            getUserRecepy(userRequest);
            }
        };
        // handling recognition of audio
        recognition.onnomatch = (event) => {
            diagnostic.textContent = "I didn't recognize the recipe.";
        };

        // the error event handles cases where there is an actual error
        // with the recognition successfully
        recognition.onerror = (event) => {
            diagnostic.textContent = `Error occurred in recognition: ${event.error}`;
        };
    } else {
        // Error state: provides user with feedback about the issue then
        // transition to the "listening state" for the next user input
        console.error("Web Speech API is not supported in this browser.");
    }
}