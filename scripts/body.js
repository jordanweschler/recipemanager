let testRecipe = {
    "ingredients": ["bread, 2 slices", "peanut butter, 1 tbsp", "jelly, 1 tbps"],
    "recipe": ["Put peanut butter on one slice of bread", "Put jelly on the other slice of bread", "Combine the two slices of bread"]
}

allRecipes = new Map();
allRecipes.set("Peanut Butter and Jelly", testRecipe);

function displayRecipe(recipeName) {
    recipe = allRecipes.get(recipeName)

    document.getElementById('sideBar').innerHTML = createIngredientList(recipe.ingredients);
    document.getElementById('mainContainer').innerHTML = createRecipeList(recipe.recipe);

    console.log(`displayRecipe '${recipeName}' successful`);
}

function createIngredientList(ingredients) {
    return ingredients.reduce(((l, ingredient) => l + `<li>${ingredient}</li>`), "<ul>") + "</ul>";
}

function createRecipeList(recipe) {
    return recipe.reduce(((l, step) => l + `<li>${step}</li>`), "<ol>") + "</ol>";
}

displayRecipeList(allRecipes)