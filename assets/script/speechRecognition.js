// Listening state: activated when user click record

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
  

} else {
  // Error state: provides user with feedback about the issue then
  // transition to the "listening state" for the next user input
  console.error('Web Speech API is not supported in this browser.');
}



// Listening state: Use web speech api - speech recognition and 
// speech synthesis to convert spoken words into text








// Listening state: transition to the " understanding state"
// if a translation intent is detected via --> understand.js
