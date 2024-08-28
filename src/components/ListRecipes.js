import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddRecipe from './AddRecipes';

function ListRecipe({ recipes, onDelete }) {
  return (
    <div className="container mt-5">  
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h3 className="text-center text-success mb-4">Lista de recetas</h3>
            <ul className="list-group">
              {recipes.map((recipe, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-1">{recipe.title}</h5>
                    <p className="mb-1">{recipe.ingredients}</p>
                  </div>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => onDelete(index)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div>
      <AddRecipe onAdd={handleAddRecipe} />
      <ListRecipe recipes={recipes} onDelete={handleDeleteRecipe} />
    </div>
  );
}

export default RecipeApp;
