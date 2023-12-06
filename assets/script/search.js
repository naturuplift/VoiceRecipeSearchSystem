userRecipe = "pasta"; // TODO uncomment when want to use user recipe request from audio

// add listeners for recipe search
$("#search-btn").click(function () {
    // console.log("click search.js running");
    // assign query search to interpreted recipe
    let query = userRecipe;
    let auth = 'apiKey=7e2a3c66efb74a6498304d006515450f';
    let number = 'number=6';
    // Recipe search state: use a recipe API https://api-ninjas.com/api/recipe
    //  to search for relevant recipes based on the user's criteria
    // TODO uncoment when want to use recipe 
    const uri = 'https://api.spoonacular.com/recipes/complexSearch?query=' + query + '&' + auth + '&' + number;
    fetch(uri)
        .then(response => { return response.json(); })
        .then(data => { startRecipeResult(data); });
});