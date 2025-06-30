import React from 'react';


export const ProductCard = ({ producto, onClick }) => {
  // Extract name from description (first line)
  const getProductName = (descripcion) => {
    const lines = descripcion.split('\n');
    return lines[0] || 'Producto';
  };

  // Extract English name from description (second line)
  const getEnglishName = (descripcion) => {
    const lines = descripcion.split('\n');
    return lines[1] || '';
  };

  // Determine if it's fruit or vegetable based on description
  const getProductType = (descripcion) => {
    const desc = descripcion.toLowerCase();
    if (desc.includes('fruta') || desc.includes('fruit')) {
      return 'Fruta';
    }
    return 'Verdura';
  };

  // Get a stock image based on product name


  const productName = (producto.nombre);
  const englishName = (producto.nombre_ingles);
  const productType = (producto.tipo_producto);
  const calories = producto["Composición nutricional"]["Energía (Kcal)"];
  const protein = producto["Composición nutricional"]["Proteínas (g)"];

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={() => onClick(producto)}
    >
      <div className="relative overflow-hidden">
        <img
          src={!producto?.image ? `/${producto.nombre}.webp` : producto['image']}
          alt={producto?.nombre || 'Producto'}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${productType === 'Fruta'
              ? 'bg-amber-100 text-amber-800'
              : 'bg-emerald-100 text-emerald-800'
            }`}>
            {productType}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {productName}
          </h3>
          {englishName && (
            <span className="text-sm text-gray-500 italic">
              {englishName}
            </span>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {producto.descripcion.substring(0, 120)}...
        </p>

        <div className="flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span className="text-emerald-600 font-semibold">
              {calories} kcal
            </span>
            <span className="text-blue-600">
              {protein}g proteína
            </span>
          </div>
          <div className="flex space-x-1">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {producto["Porción comestible"].split(' ')[0]}% comestible
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};