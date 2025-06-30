import React, { useState } from 'react';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (producto) => {
    setSelectedProduct(producto);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      {selectedProduct ? (
        <ProductDetail 
          producto={selectedProduct} 
          onBack={handleBackToList}
        />
      ) : (
        <ProductList 
          productos={productos} 
          onProductClick={handleProductClick}
        />
      )}
    </div>
  );
}

export default App
