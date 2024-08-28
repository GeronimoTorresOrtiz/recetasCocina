import React from 'react';
import ListRecipe from '../components/ListRecipes';

function Home() {
  return (
    <div style={{
      backgroundImage: "url('https://www.cocinatis.com/archivos/202207/comidas-de-verano_large_16x9.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px',
      color: '#fff', 
    }}>
      <ListRecipe />
    </div>
  );
}

export default Home;
