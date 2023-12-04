// Recipe search state: determine the specific details of
// the recipe requested such as dishes, ingredients, cuisine

// let query = userIntent; // TODO uncomment when want to use user recipe request from audio
let query = 'vegetable soup';
let recipeResult = [];

// Recipe search state: use a recipe API https://api-ninjas.com/api/recipe
//  to search for relevant recipes based on the user's criteria
// TODO uncoment when want to use recipe API
$.ajax({
    method: 'GET',
    url: 'https://api.spoonacular.com/recipes/complexSearch' + query,
    headers: { 'X-Api-Key': 'd63e18956a774f15b02ad97a7ae8903d'}, // TODO hide auth before pushing to git
    contentType: 'application/json',
    success: function(result) {
        recipeResult = result; // save result of the search
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

// Here one sample output from recipe API query:
// const recipe = [
//     {
//         "title": "Stracciatella (Italian Wedding Soup)",
//         "ingredients": "3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste",
//         "servings": "4 servings",
//         "instructions": "Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into \"rags.\" Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as \"Stracciatella\" is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs."
//     },
//     {
//         "title": "Italian Wedding Soup",
//         "ingredients": "1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees",
//         "servings": "1 Servings",
//         "instructions": "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am"
//     },
//     {
//         "title": "Stracciatella (Italian Wedding Soup)",
//         "ingredients": "1 lb Fresh spinach, washed and chopped|1 Egg|1 c Parmesan cheese, * see note|Salt, to taste|Pepper, to taste",
//         "servings": "6 Servings",
//         "instructions": "Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into \"rags.\" Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese."
//     },
//     {
//         "title": "Italian Wedding Soup",
//         "ingredients": "2 qt Chicken stock|1 Chopped carrot|1/2 Chopped onion|1 Chopped celery|2 oz Ground meat; (or ground vegieburger can be used)|1 Egg|1 Sprig of chopped parsely",
//         "servings": "4 - 6 servin",
//         "instructions": "Bring chicken stock to a boil add the chopped carrot,celery and onion and lower heat. Combine ground meat or vegieburger, egg, and parsely, the consistancy of the mixture is kinda loose. Drop in small pieces of the meat mixture, not much larger than a Tablespoon. (making tiny meatballs.) Turn up the heat and bring to a boil,5 -7 minutes, it is ready when the little meatballs float to the surface."
//     }
// ]

// Another sample from recipe API query:
// const recipe = [
//     {
//         "title": "End-Of-Month Vegetable Soup",
//         "ingredients": "1/2 Chinese cabbage|1/2 Carrot|1/2 Red bell pepper|1 Yellow onion|4 sm Potatoes|1/8 lb Bacon pieces (for seasoning)|4 Prosciutto end bits (for seasoning, optional)|5 Stalks celery|1 Bouquet garni (e.g., about 1 t each parsley and thyme, 1 or 2 bay leaves)|2 Chicken or beef bouillon cubes|2 Garlic cloves|Pepper (to taste)|1 c White wine (optional)",
//         "servings": "6 Servings",
//         "instructions": "Make the bouquet garni by tying the herbs up in a cheesecloth or coffee filter. Put a quart of water to boil with about 1/2 t salt (I don't like to use too much salt if I use bouillon), the bouquet garni and the bouillon. Dice the onion, mince the garlic, and add these to the soup together with the bacon and/or prosciutto ends. Bring this to a boil. Simmer 5 minutes. If scum forms on the surface, skim it off. Dice the potatoes and add to the boiling pot. Cut up everything else and add it. Add the wine. Adjust the liquid so that it covers the vegetables. After it boils again, adjust the seasoning and simmer for about an hour, or until it is done (this is quite subjective). NOTES: * Soup with a mixture of vegetables -- I had an eclectic mixture of vegetables going bad in the refrigerator, so I collected them and came up with this soup. It was very good, so I would like to share it with you all. Caveat: I rarely measure anything, so be careful of quantities. * This will serve 6 people at once, or 2 people for three days. It ages well in the refrigerator. : Difficulty: easy. : Time: 10 minutes preparation, 1 hour simmering. : Precision: no need to measure."
//     },
//     {
//         "title": "Fresh Tomato-Vegetable Soup",
//         "ingredients": "6 md Tomatoes|3/4 c Red onions, chopped|3/4 c Celery, diced, include tops|4 ts Olive oil|3 Garlic cloves, minced|3/4 c Zucchini, diced|3/4 c Corn kernels|4 1/2 c Vegetable broth|3/4 ts Salt|5 ts Basil, chopped|1/2 c Small pasta shells, uncooked|Black pepper, to taste",
//         "servings": "6 Servings",
//         "instructions": "Plunge the tomatoes into boiling water & then into iced water to remove their skins. Chop the tomatoes & set aside. In a stockpot, saute the onions & celery in the oil over medium heat until tender, 5 minutes. Stir in the garlic, zucchini, corn & saute for another 2 minutes. Add the broth & bring to a boil. Add the tomatoes, salt & basil. Reduce the heat, cover & simmer for 15 minutes, stirring occasionally. Add the pasta, cover & simmer for 30 minutes (Seems rather a long time to me!). Sprinkle with the pepper & serve hot."
//     },
//     {
//         "title": "Hortosoupa (Vegetable Soup)",
//         "ingredients": "2 lb Potatoes|2 Onions (or 3)|4 Carrots (or 5)|1 1/2 lb Ripe tomatoes (approx.) OR|1 cn Whole tomatoes (30 oz.)|1 bn Celery|10 c Water|1 tb Coarse salt|1 ds Pepper|2 tb Shortening or other oil|Croutons (optional)",
//         "servings": "6 Servings",
//         "instructions": "Wash, clean, and chop the potatoes, onions, carrots, and celery. Add to the water and boil for 20 min. Add salt and tomatoes (if you are using ripe tomatoes, pierce with fork) and cook for 30 to 45 min. Remove from the heat. Pass all the vegs. through a strainer or puree machine or blender, then return to the pot. Add a little pepper and stir in the shortening or serve the soup and add oil at the table. Serve with croutons."
//     },
//     {
//         "title": "Chicken-And-Vegetable Soup",
//         "ingredients": "2 Boiling chickens, 4 lbs ea. cut in quarters|10 c Cold water|4 md Carrots; thinly sliced|2 md Yellow onions peeled, finely diced|1 sm Head celery; thinly sliced|2 lg Leeks; green tops and white bottoms separated|1/2 tb Whole black peppercorns|6 Bay leaves|4 Sprigs fresh thyme; -=OR=- Fresh thyme leaves, -=OR=- Dried thyme|1 tb Salt|1 tb Unsalted butter",
//         "servings": "8 Servings",
//         "instructions": "COMBINE CHICKENS AND WATER in a 5-quart stockpot. Cover, bring to a boil over high heat. Reduce heat to low and skim off the scum that accumulates on the surface. Remove chicken breast quarters and set aside. Add 2 cups carrots, 1 cup onions, 2 cups celery, green leek tops, peppercorns, bay leaves, thyme and salt. Cover and simmer for 45 minutes. Remove cover, replace the chicken breasts and continue to cook for another 25 minutes. Meanwhile, slice the white parts of leeks into 1/4-inch rounds and wash well to remove any sand. You should have about 1 cup. Melt the butter in a medium saucepan over medium heat and add the leeks and the remaining carrots, onions and celery. Cover and cook gently until vegetables are soft, about 5 minutes. Remove the chicken from the liquid and place on a platter. Strain the liquid through a fine strainer into a large plastic container and discard the herbs, spices and the cooked soup vegetables. Skim and discard any fat from the surface of the broth. Remove and discard chicken skin. Remove the meat from the bones, dice it and set aside. Place bones in an airtight freezer container and save for making stock. Immediately prior to serving, transfer broth to a pot and heat, covered, over high heat. Heat chicken and vegetables, covered, in 350F oven until hot. Decorate each soup bowl with some heated diced vegetables and chicken. Pour the hot broth into a pitcher or soup tureen and pour the soup into the garnished bowls at the table."
//     },
//     {
//         "title": "Vince's Cornicopia Vegetable Soup",
//         "ingredients": "2 1/2 lb Marrow shanks|Water|1/4 ts Hot pepper sauce|1/4 c Beef base, restaurant style|Salt and pepper|1 c Chopped onions|2 md Carrots; chopped|3 Stalks celery; chopped|2 md Potatoes; chopped|1/2 c Barley|1/2 c Tomato paste",
//         "servings": "4 Servings",
//         "instructions": "~Beverly has known the Cuccia's for years. Vicki graciously gave her the recipe. It's an all day soup, slow simmer, it needs skimming. You could substitute meaty bones. Beef base is sold retail at quantity grocers and membership stores. This recipe does not use instant barley. ~ Put bones in soup kettle and cover with water. Bring to boil, cover and reduce heat to simmer for 4 hours. Skim foam as it appears. Add tabasco, beef base, salt and pepper. Simmer for 30 minutes, stirring occasionally. ~ Strain broth and scrape any meat from bones. Put strained broth and bits of meat into pot. Add onions, carrots, celery, potatoes and barley. Bring to a boil, reduce heat and simmer about 1 hour or until barley is cooked. Add tomato paste and simmer another 15 minutes."
//     },
//     {
//         "title": "Pesto Vegetable Soup",
//         "ingredients": "2 tb Olive oil|1/2 Onion|1 lg Can tomatoes|2 cn Chicken broth|10 oz Green beans|1 cn Zucchini|3 New potatoes|1 cn Chopped carrots|Sea salt & black pepper|1/3 c Chopped parsley|1 tb Dried thyme|1 cn Great northern beans|1 lg Can cannellini beans|4 oz Capellini|3/4 c Grated Romano|1/2 c Pesto sauce",
//         "servings": "1 servings",
//         "instructions": "In large stockpot, heat oil & saute onion until soft. Add tomatoes. Cook a few minutes. Add broth. Bring to simmer. Add green beans, zucchini, potatoes, carrots, salt & black pepper. Stir well. Add parsley & thyme. Cook 10 minutes. Add northern & cannellini beans & capellini. Cook 5 minutes. Stir pesto into soup. Simmer 2 minutes. Serve hot with crusty bread & grated Romano sprinkled over all. Approximately 8-20 minutes."
//     },
//     {
//         "title": "Pasta-Vegetable Soup",
//         "ingredients": "6 c Water; divided|1 1/2 c Chopped onion|1 c Dried lentils|1 c Sliced carrot|1 c Sliced celery|1 tb Brown sugar|1/2 ts Dried whole basil|1/2 ts Dried marjoram|1/2 ts Dried whole oregano|1/2 ts Dried whole thyme|1/2 ts Pepper|3 Cloves garlic; crushed|1 Bay leaf|31 1/2 oz Low-sodium chicken broth; (3 cans)|1 28 ounce wh tomatoes; (1 can)|Undrained and chopped|9 oz Frozen cut green beans; (1 package) thawed|6 oz Tomato paste; (1 can)|1/4 c White wine vinegar|1 c Small seashell macaroni; uncooked|1 c Grated Romano cheese|1 tb Grated Romano cheese",
//         "servings": "17 Servings",
//         "instructions": "Combine 4 cups water and next 16 ingredients in a large Dutch oven; bring to a boil."
//     },
//     {
//         "title": "Crockpot Vegetable Soup",
//         "ingredients": "1 Chopped onion|2 md Chopped Potatoes|3 Cans Chicken Broth|14 oz Can Whole Tomatoes. (Drain)|1 lg Can V-8 Juice|2 Stalks Celery. Chopped|1 c Chopped Spinach|1/2 ts Salt & Pepper|1 ts Dried Basil|1/2 ts Dried Thyme|1 tb Butter|2 Sliced Carrots|4 c Water|Dash Red Pepper Flakes",
//         "servings": "1 Servings",
//         "instructions": "Add bow tie pasta if desired. Cook overnight in the crockpot. Sue Kuhn (Granite Bay, Ca)"
//     },
//     {
//         "title": "Second Time Around Vegetable Soup (Mf)",
//         "ingredients": "Half of cooked leeks-carrots & potatoes from sunday startup boiled fillet of beef and steamed vegetables|Broth, to thin|Heavy cream, optional|Snipped chives, for garnish",
//         "servings": "4 Servings",
//         "instructions": "With a food mill puree the leeks, carrots, and potatoes. Transfer the puree to a saucepan. Add enough broth to turn the puree into a souplike consistency and bring to a simmer. If desired, add heavy cream to taste. Season with salt and pepper. Ladle into soup bowls and garnish with snipped chives."
//     },
//     {
//         "title": "Soup: Creme of Vegetable Soup - Le Cellier Re",
//         "ingredients": "1 1/2 Quarts chicken stock|3/4 c (1-1/2 sticks) butter|3/4 c Diced onion|1 1/2 c Diced potato|3/4 c Peeled diced tomato|3/4 c Diced carrot|3/4 c Green beans|3/4 c Broccoli, coarsely chopped|3/4 c Minced leek|3/4 c Minced zucchini|1 Clove garlic|1 1/2 ts Sugar, or to taste|Salt and freshly ground pepper to taste|1/2 c Heavy cream",
//         "servings": "6 Servings",
//         "instructions": "Melt butter in large stock pot over medium heat. Add onion and saute' 1 to 2 minutes. Reduce heat to low and add remaining ingredients except stock, cream and parsley. Cook until vegetables are soft but not brown, about 20-25 minutes. Add stock and bring to boil over medium high heat. Reduce heat and simmer about 10 minutes. Cook slightly. Transfer to blender of processor in batches and puree to smooth. Taste and adjust seasoning. Return to stock pot, place over medium heat and gradually stir in cream. Heat through but do not boil. Garnish with parsley. From Le Cellier Restaurant, Santa Monica, California. Recipe shared by Cate Vanicek"
//     },
// ];

// // define global variable recipeResult to be use in relevantrecipe.js
// recipeResult = recipe;
// console.log(recipe)

// call objects:
// For first one the recipe title recipe[0].title;
// For first one the recipe ingredients recipe[0].ingredients;
// For first one the recipe servings recipe[0].servings;
// For first one the recipe instructions recipe[0].instructions;
// can be extracted with 'for' loop until: recipe.length