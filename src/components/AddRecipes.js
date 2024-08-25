import React, { useState } from 'react';

function AddRecipe({ onAdd }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, ingredients });
    setTitle('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe;
