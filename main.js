// FUNCTION
const getData = async (query) => {
  // MAKING API REQUEST
  let api = `https://api.edamam.com/search?q=${query}&app_id=fe5e35a6&app_key=b2c9cdaed162cf26c646dfead0562cdc&from=0&to=6`
  try {
    const response = await axios.get(api)
    console.log(response.data)
    response.data.hits.forEach((hit) => {
      const recipe = hit.recipe
      showRecipeData(recipe)
    })
  } catch (error) {
    console.log(`error: ${error.message}`)
  }
}
getData('veggies')

// DYNAMIC HTML
function showRecipeData(recipe) {
  let recipeinfo = `
  <div class = "card"> 
   <img id="image" src="${recipe.image}" alt="image">
   <h2 id="recipe-name">${recipe.label}</h2>
   <div class = "icons">
   <i class="fa fa-clock-o">${recipe.totalTime}</i>
   <i class="fab fa-cuttlefish">${Math.floor(recipe.calories)}</i>
   <i class="fa fa-users">${recipe.yield}</i>
   </div>
   <a href="${recipe.url}" class="btn">Let's Cook!</a>
  </div>
  `
  document.querySelector('#recipe-container').insertAdjacentHTML('beforeend', recipeinfo)
}

const search = document.querySelector('#main-search')

// EVENTHANDLER
search.addEventListener('click', (e) => {
  e.preventDefault()
  let inputValue = document.querySelector('.searchbar').value
  console.log(inputValue)
  removeRecipe()
  getData(inputValue)
  document.querySelector('.searchbar').value = ''
})

// REMOVES PREVIOUS RECIPE
function removeRecipe() {
  const appendElement = document.querySelector('#recipe-container')
  while (appendElement.lastChild) {
    appendElement.removeChild(appendElement.lastChild)
  }
}




