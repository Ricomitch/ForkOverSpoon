# Project Overview

## FORK OVER SPOON


## Project Description

[<b>Fork over spoon</b>](https://pages.git.generalassemb.ly/Rico/Forkoverspoon/) is a food app that lets you search recipes by food names. After you find a recipe you like you can click a link and be redirected to a detailed recipe. This app pull data from the Edamam API.


## API and Data Sample

The API im using is [Edamam](https://www.edamam.com/)
```
{
    "q": "chicken",
    "from": 0,
    "to": 6,
    "more": true,
    "count": 135812,
    "hits": [
        {
            "recipe": {
                "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b79327d05b8e5b838ad6cfd9576b30b6",
                "label": "Chicken Vesuvio",
                "image": "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
                "source": "Serious Eats",
                "url": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
                "shareAs": "http://www.edamam.com/recipe/chicken-vesuvio-b79327d05b8e5b838ad6cfd9576b30b6/chicken",
                "yield": 4.0,
                "dietLabels": [
                    "Low-Carb"
                ],
                "healthLabels": [
                    "Peanut-Free",
                    "Tree-Nut-Free"
                ],
                "cautions": [
                    "Sulfites"
```

## Wireframe

<img src="photos/Screen Shot 2020-07-12 at 6.45.44 PM.png" width = 800> 



## MVP

1. Responsive design for desktop & mobile users.
2. A search bar for the user to input food names.
3. Make an API call using Axios.
4. Display recipe names, time to cook, serving size, and a clickable link to the recipe.

## PostMVP

1. Click effect on markers when the mouse is on the seach bar.
2. Hovereffect on recipe links. 
3. Use local storage to save user favorite recipes.
4. Apply advanced CSS using media-queries

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Complete
|July 13| Basic HTML, CSS, JS structure and get data from API  | Complete
|July 14| Pseudocode / actual code | Complete
|July 15| Initial Clickable Mode | Complete
|July 16| Responsive Design & PMVPs | Complete
|July 17| Presentations | Complete

## Priority Matrix

<img src="photos/Screen Shot 2020-07-12 at 9.51.08 PM.png" width = 800>

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Building out basic HTML / CSS | H | 3hrs | 4hrs | 4hrs |
| Applying basic flex-box to different sized screens | H | 2hrs | 3hrs | 3hrs |
| Forming basic Javascript API implementation |	H | 3hrs | 4hrs | 4hrs |
| Applying and testing API functionality | H | 6hrs | 8hrs | 8hrs |
| Cleaning up CSS / flex-box to fit output results | M | 2hrs |	4hrs | 4hrs |
| Finishing up CSS / flex-box | M | 3hrs | 5hrs | 5hrs |
| Add extra features to CSS | M | 5hrs | 5hrs | 5hrs |
| Add in any additional features from post MVP list | M	| 5hrs | 4hrs | 4hrs |
| Finish anything needed for presentation | M | 4hrs | 4hrs | 4hrs |
| Total | H | 33hrs | 41hrs | 41hrs |


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

This is the snippet I am proud of most because this gave me functionality and was a ahhhaaa moment for me. 

```function showRecipeData(recipe) {
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
```

## Change Log 
 I had to change around one of my MVP'S because I had to change my API due to the amount of clicks it gave me per-day.
