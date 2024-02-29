# Voice To Recipe Search System

<br/>
<p align="center">
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=bootcamp&message=UNB&color=red" /></a>
    <a href="https://jquery.com/" >
        <img alt="JavaScript - jQuery" src="https://img.shields.io/static/v1.svg?label=JavaScripts&message=jQuery&color=blue" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction" >
        <img alt="JavaScript - Web APIs" src="https://img.shields.io/static/v1.svg?label=JavaScripts&message=Web APIs&color=green" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces" >
        <img alt="JavaScript - DOM" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=DOM&color=violet" /></a>
    <a href="[https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction](https://wit.ai/)" >
        <img alt="Server-Side APIs - Wit.ai" src="https://img.shields.io/static/v1.svg?label=Server-Side APIs&message=Wit.ai&color=orange" /></a>
</p>
<br/>

## Description

The Voice to Recipe Search System is a voice-enabled application aimed to empower users in effortlessly searching for recipes using voice commands.
Powered by JavaScript, jQuery, Web APIs, DOM manipulation, and Wit.ai for natural language understanding.
Users can easily engage with the system by articulating their preferences into their device's microphone, specifying ingredients or dish preferences, and promptly receiving personalized recipe suggestions.

Collaborators of the project: **Samantha Allen**, **Maika Gabriela Saba** and **Arnaldo Sepulveda Espinosa**

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Steps to build Recipe Intent Recognition](#steps-to-build-recipe-intent-recognition)
- [Explanation of Wit.ai Concepts of Intents, Entities and Traits](#explanation-of-wit.ai-concepts-of-intents-entities-and-traits)
- [How to Define Search Queries in Spoonacular API](#how-to-define-search-queries-in-spoonacular-api)
- [State Flow Diagram](#state_flow_diagram)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Voice Recognition:** Utilizes the Web Speech API for speech recognition, allowing users to initiate recipe searches using voice commands.
- **Natural Language Processing:** Employs natural language processing techniques to interpret user intent for input and extract relevant information.
- **Recipe Search:** Integrates with a recipe database or API to perform real-time recipe searches based on interpreted request.
- **User-friendly Interface:** Provides a simple and intuitive interface for a seamless user experience.
- **Multiple Recipe Options:** Choose from various recipes effortlessly.

## Usage

You can simply visit the link [https://naturuplift.github.io/VoiceRecipeSearchSystem/][project-app].

Another option is to clone the repository to your local machine and open the `index.html` file in a web browser.

```
git clone https://github.com/naturuplift/voice-recipe-search-system.git
# Additional installation steps, dependencies, etc.

```

1. Open the HTML File:
Navigate to the project directory.
Open the index.html file in a web browser.

2. Start Voice Search:
Click the "Start Voice Search" button.
Speak a command like "Find recipes for chicken curry."
  
![Screenshot 23](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/f67e767d-c732-4c42-ad5f-414dac6ac2d6)


3. View Results:
The system will display recognized voice commands and initiate a recipe search.
Recipe suggestions will be presented to the user.
  
![Screenshot 22](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/f4ac2269-0c72-409f-b161-eb832f8e37d1)


4. View Selected Recipe:
The system will display the selected recipe with corresponding summary, servings, ingredients and instructions.
     
![Screenshot 3](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/6c378ad7-0de4-43b7-92bc-08b33d57539d)

## Technologies Used

-    HTML
-    CSS
-    JavaScript
-    jQuery
-    Web Speech API
-    [Wit API][wit-api]
-    [Spoonacular API][spoon-api]

## Steps to Build Recipe Intent Recognition with Wit.ai

1. **Sign up with Meta:** Go to the [Wit.ai home page][wit-api] and sign in with your Meta account.
2. **Create a Wit app:** Click the New App button on the Welcome to Wit.ai page. Creating a new app is very simple: you just need to name your app, and choose a language. Then click Create.
3. **Train your app:** Wit allows you to understand what your users say to your app. The Understanding section is where you teach Wit how to understand your users.
4. **Improve the detection:** Your app doesn't know a lot yet, but it will start to recognize the intent of getting information about what temperature it is. When Wit starts recognizing the utterance, the intent will be prefilled along with a level of confidence (between 0 and 1).
5. **Query your app:** At this point, you can already query your app via the Wit.ai API. Go to the Settings screen (click Settings from the Management menu). Type an example like what's the temperature in there? in the Query Your App box. Then copy the cURL command and try it in your terminal.
6. **Add a new intent:** Now go to the Understanding screen again. Surprise! You now see the new examples you tried when querying the API. Every previously unseen utterance hitting the API will show up here, prefilled with the intent recognized by Wit.
7. **Add an entity and capture more:** In the previous example, we also want to capture the targeted temperature. We will use entities to extract meaningful pieces of information from an utterance.
8. **Next steps:** Congrats! You've built your first Wit app and it can understand the difference between requests to set or get the temperature. Now, you can:
Implement the logic for your bot or app to actually get or set the temperature
Connect your Wit app with Messenger to start receiving entities when your users talk to your bot
The last step is to use our HTTP API to integrate Wit to your app.

## Explanation of Wit.ai Concepts of Intents, Entities and Traits

#### **Intent:**
An intent represents the goal or purpose behind a user's input. It signifies what the user is trying to achieve or communicate. In the context of chatbots or natural language processing systems, intents are used to categorize user messages based on their intended meaning.

| ***Intent:*** | GetRecipe |
| ------ | ------ |
| ***Examples of User Input:*** | "Find me a recipe for spaghetti Bolognese", "Tell me how to make chocolate chip cookies"|

#### **Entities:**
Entities are pieces of information within a user's input that are relevant to the intent. They represent the specific details or parameters that the system needs to extract to fulfill the user's request. Entities provide context and specificity to the intent.

| ***Intent:*** | GetRecipe |
| ------ | ------ |
| ***Entities:***| |
| | ***{dish}*** spaghetti Bolognese, chocolate chip cookies |
| | ***{ingredient}*** chicken, tomatoes |

#### **Traits:**
Traits are additional characteristics or attributes associated with entities. They provide more nuanced information about the entities, helping to refine and narrow down the search or response. Traits add granularity to the understanding of user inputs.

| ***Intent:*** | GetRecipe |
| ------ | ------ |
| ***Entities:***| |
| | ***{dish}*** spaghetti Bolognese|
| | ***{cuisine}*** (trait) - Italian|
| | ***{difficultyLevel}*** (trait) - Intermediate

#### ***How They Work Together***

|**Scenario**|***User Input:*** |"Find me an easy recipe for chicken curry."|
| ------ | ------ |------ |
|**Analysis**|||
|| ***Intent Detected:*** |GetRecipe
|| ***Entities Extracted:***
||| ***{dish}*** chicken curry
||| ***{difficultyLevel}*** (trait) - easy

### Practical Use Case

Picture this: you're crafting a recipe search chatbot, and a user eagerly states, "Find me a recipe for spaghetti Bolognese." In this scenario, the system is like a culinary detective. It recognizes the user's intent, labeling it as 'GetRecipe,' and swiftly extracts the essential piece of information—the dish entity {dish}, revealing the quest for "spaghetti Bolognese." These details become the chatbot's key to unlocking the treasure trove of knowledge about the sought-after spaghetti Bolognese recipe. The chatbot, armed with this understanding, responds promptly and accurately, delivering the mouthwatering details the user craves.

Now, let's dive into the behind-the-scenes magic of training the natural language model in the Wit.ai application. To teach the application this culinary language, you craft examples called 'utterances.' In the example below, you set an example to train the model to recognize the 'GetRecipe' intent and extract the 'dish' entity. Simply enter the user's request, select the intent, entity, and trait, and with a click on the 'Train and Validate' button, you seamlessly incorporate this example into the application model. It's like adding a new clue to the chatbot's detective toolkit.

![Training Wit](https://github.com/naturuplift/voice-recipe-search-system/assets/23546356/10b998e2-2ee8-425b-bf42-dc496c706af8)

By meticulously defining intents, entities, and traits, you construct a well-organized framework for your system. This structured approach empowers your chatbot or natural language processing application to comprehend and respond to a diverse array of user inputs. The result? An effective and user-friendly culinary companion, ready to assist and delight users on their recipe-seeking journeys.

### Training a Model on the wit.ai Platform

To create utterances and intents for a recipe search system using Wit.ai, you'll want to define various ways users might express their requests.
Here's an example set of intents and corresponding utterances for a recipe search system:

#### **GetRecipe**
|**Intent:**| **GetRecipe**|
| ------ | ------ |
| ***Utterances:***||
||"Find me a recipe for {dish}"
||"Give me a recipe for {dish}"
||"What's the recipe for {dish}?"
||"I want to cook {dish}, what's the recipe?"
||"Tell me how to make {dish}"
| ***Explanation:***
|| ***Entity: {dish}***
|| This intent is used when the user wants a recipe for a specific dish. The entity ***{dish}*** captures the name of the dish the user is interested in.

#### **GetRecipeByIngredient**

|**Intent:** |**GetRecipeByIngredient**|
| ------ | ------ |
| ***Utterances:***|
||"What can I cook with {ingredient}?"
|| "Give me recipes with {ingredient}"
|| "Find recipes using {ingredient}"
|| "I have {ingredient}, what can I make?"
| ***Explanation:***|
|| ***Entity: {ingredient}***
|| This intent is used when the user wants recipes based on a specific ingredient they have or want to use. The entity ***{ingredient}*** captures the name of the ingredient.

#### **GetRandomRecipe**

|**Intent:**| **GetRandomRecipe**|
| ------ | ------ |
| ***Utterances:***|
|| "Find me healthy recipes"
|| "I want to cook something nutritious"
|| "Healthy meal ideas"
|| "Suggest me a low-calorie recipe"
| ***Explanation:***
|| ***Entity: none***
|| This intent is used when the user specifically requests healthy or nutritious recipes. There are no specific entities or roles involved in this case

## How to Define Search Queries in Spoonacular API

We matched intents extracted by Wit and used API that match in [Spoonacular API][recipe-api]


|**Intent:**| **GetRecipe**|
| ------ | ------ |
|Method  | GET
|API  |https://api.spoonacular.com/recipes/complexSearch|

|**Intent:**| **GetRecipeByIngredient**|
| ------ | ------ |
|Method  | GET
| API| https://api.spoonacular.com/recipes/findByIngredients|

|**Intent:**| **GetRandomRecipe**|
| ------ | ------ |
|Method  | GET
| API| https://api.spoonacular.com/recipes/random|

## State Flow Diagram

For a visual representation of the sequence of actions involved in the [Voice Language Translation System][voice-system], refer to the [State Flow Diagram][state-flow] provided in the project documentation.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, follow these steps:

1.    Fork the repository.
2.    Create a new branch for your feature or bug fix.
3.    Make your changes and commit them.
4.    Submit a pull request.
    
## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[project-app]: <https://naturuplift.github.io/VoiceRecipeSearchSystem/>
[project-code]: <https://github.com/naturuplift/bootcamp-project-one/blob/main/index.html>
[state-flow]: <https://github.com/naturuplift/bootcamp-project-one/blob/main/assets/img/Voice%20Language%20Translation%20State%20Diagram%20v2.png>
[voice-system]: <https://github.com/naturuplift/voice-recipe-search-system/blob/main/assets/img/State%20Diagram%20Recipe%20Search%20v1.png>
[wit-api]: <https://wit.ai/>
[spoon-api]: <https://spoonacular.com/food-api/docs>
[recipe-api]: <https://spoonacular.com/food-api/docs>
[MIT]: <https://github.com/naturuplift/bootcamp-project-one/blob/main/LICENSE>
