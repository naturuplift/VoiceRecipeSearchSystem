$('.previous-searches').hide();
let cardClick = $('.card');
let IdSearchResponse;
let storedRecipeData;

function recipeInfoFetch(recipeSelected) {

    console.log(recipeSelected)
    // cardClick.on('click', function(){
    //     console 
    // })
}

    cardClick.on('click', getId()); 

    function getRecipeInfo(){

        //insert id from local storage
        let queryId = storedRecipeData;
        let AUTH = 'apiKey=3a12b110705e48fab6dd9e0ae25f9a15';

        const uri = 'https://api.spoonacular.com/recipes/' + queryId + '/information&' + AUTH;
    
        fetchData(uri).then(data => {
            // once fetch respond with data then run this code:
            IdSearchResponse = data;
            console.log(data);
    
        });
    }
    
    // here we pass the url we want to call from API and await until fetch responds
    async function fetchData(url) {
        const fetcher = await fetch(url)
        const data = await fetcher.json();
        return data;
    }