import React from 'react';
import AddRecipe from '../components/AddRecipes'; 

function Home() {
  const handleAddRecipe = (recipe) => {
    console.log('Recipe added:', recipe);
    // Aquí puedes agregar la lógica para manejar la nueva receta
  };

  return (
    <div>
      <h1>Home Page</h1>
      <AddRecipe onAdd={handleAddRecipe} />
    </div>
  );
}

export default Home;
