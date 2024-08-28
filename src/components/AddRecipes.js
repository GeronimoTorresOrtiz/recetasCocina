import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <h4 className="mb-4 text-center text-primary">Añadir Nueva Receta</h4>
            <div className="mb-3">
              <label htmlFor="recipeTitle" className="form-label">
                Titulo de la receta
              </label>
              <input
                type="text"
                className="form-control"
                id="recipeTitle"
                placeholder="Introduzca el titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="recipeIngredients" className="form-label">
                Ingredientes
              </label>
              <textarea
                className="form-control"
                id="recipeIngredients"
                placeholder="Introduzca los ingredientes"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                rows="5"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Añadir receta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;
