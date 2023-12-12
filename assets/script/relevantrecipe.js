$('.previous-searches').hide();

let IdSearchResponse;


function recipeInfoFetch(recipeSelected) {
    console.log(recipeSelected);
       //insert id from local storage
       let queryId = recipeSelected;
       let AUTH = 'apiKey=8ed9b997410c46de90674787041efc93';

       const requestUrl = 'https://api.spoonacular.com/recipes/' + queryId + '/information?' + AUTH;
   
       fetchData(requestUrl).then(data => {
           // once fetch respond with data then run this code:
           IdSearchResponse = data;
           console.log(data);
   
       });
};
    
    // here we pass the url we want to call from API and await until fetch responds
    async function fetchData(requestUrl) {
        const fetcher = await fetch(requestUrl)
        const data = await fetcher.json();
        return data;
    }