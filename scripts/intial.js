// Clears the main display and populates it with the list (array) of recipes supplied
function displayRecipeList(recipes) {
    // clear sideBar
    document.getElementById('sideBar').innerHTML = "";
    recipeButtons = ""

    recipes.forEach((recipe, name) => {
        recipeButtons += `<button class="recipeSelect" onclick="displayRecipe('${name}')">${name}</button>`;
    });

    document.getElementById('mainContainer').innerHTML = recipeButtons;

    console.log("displayRecipeList successful")
}