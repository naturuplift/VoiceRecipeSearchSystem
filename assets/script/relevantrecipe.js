$('.previous-searches').hide();

let idSearchResponse;

function recipeInfoFetch(recipeSelected) {
    
    // window.location.href = './recipecard.html';

    // to hide recipe cards
    $("#recipeResultsList").empty();

    console.log(recipeSelected);
    //insert id from local storage
    let queryId = recipeSelected;
    let AUTH = 'apiKey=47a06039c35d428ab526ad39948d7b16';

    const requestUrl = 'https://api.spoonacular.com/recipes/' + queryId + '/information?' + AUTH;

    fetchData(requestUrl).then(data => {
           // once fetch respond with data then run this code:
           idSearchResponse = data;
           console.log(data);


        // create html element for recipe selected
            let recipeShow = `
            <div class="row">
            <div class="col">
                <div class="recipe-details-box rounded">
                <h2 class="recipe-title" id="title">${idSearchResponse.title}</h2>
                <img src="${idSearchResponse.image}">
                <p class="recipe-details"><b>Summary:</b></p>
                <p id="servings">${idSearchResponse.summary}</p>
                <p class="recipe-details"><b>Servings:</b></p>
                <p id="servings">${idSearchResponse.servings}</p>
                <p class="recipe-details"><b>Ingredients:</b></p>
                <p id="ingredients">
                    <li>
                    <ul>
                        123
                    </ul>
                    </li>
                </p>

                <p lass="recipe-details"><b>Instructions:</b></p>

                <p id="instruction">
                ${idSearchResponse.instructions}
                </p>
                </div>
            </div>

            </div>
            `;

        // add to html code above
        $("#recipeResultsList").append(recipeShow);


        // console.log('Just before data')
        var storedData = JSON.parse(localStorage.getItem('recipeData'));
        console.log(storedData)

        for (let index = 0; index < storedData.length; index++) {

            console.log('I am ${index} loop')

            
            // created card into html and add recipe picture and title
            var recipeCard = `
                <div class="previous-searches-${index}" id="previous-searches-${index}">
                    <div class="card">
                        <img src="${recipeSearchResponse.results[index].image}">
                        <div class="card-body">
                            <h5 class="card-title">${recipeSearchResponse.results[index].title}</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            `;

            $("#recipeResultsList").append(recipeCard);
        }
   
    });
}
    
// here we pass the url we want to call from API and await until fetch responds
async function fetchData(requestUrl) {
    const fetcher = await fetch(requestUrl)
    const data = await fetcher.json();
    return data;
}