// Function to edit a recipe by ID
function editRecipe(recipeId, newRecipeName, newIngredients, newInstructions, newImage) {
    const index = recipes.findIndex(recipe => recipe.id === recipeId);
    if (index !== -1) {
        recipes[index].name = newRecipeName;
        recipes[index].ingredients = newIngredients;
        recipes[index].instructions = newInstructions;
        recipes[index].image = newImage;
    }
}

// Example of using the addRecipe function
addRecipe("Pasta Carbonara", "Pasta, Eggs, Bacon, Parmesan", "Cook pasta. Mix eggs, cheese, and bacon. Combine.", "carbonara.jpg");

// Example of using the deleteRecipe function
deleteRecipe(123); // Assuming 123 is the ID of the recipe to delete

// Example of using the editRecipe function
editRecipe(456, "Spaghetti Bolognese", "Spaghetti, Ground Beef, Tomato Sauce", "Brown beef, add sauce, serve.", "bolognese.jpg");
