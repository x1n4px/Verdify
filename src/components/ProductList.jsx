import React, { useState, useMemo } from 'react';
import { Search, Filter, Apple, Carrot } from 'lucide-react';
import { ProductCard } from './ProductCard';

 

export const ProductList = ({ productos, onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const filteredProducts = useMemo(() => {
    return productos.filter(producto => {
      const productName = producto.descripcion.split('\n')[0] || '';
      const englishName = producto.descripcion.split('\n')[1] || '';
      
      const matchesSearch = productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           englishName.toLowerCase().includes(searchTerm.toLowerCase());
      
      const productType = producto.descripcion.toLowerCase().includes('fruta') || 
                         producto.descripcion.toLowerCase().includes('fruit') ? 'Fruta' : 'Verdura';
      
      const matchesFilter = selectedFilter === 'Todos' || productType === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [productos, searchTerm, selectedFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Catálogo Nutricional
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre toda la información nutricional de frutas y verduras frescas
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar frutas y verduras..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFilter('Todos')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  selectedFilter === 'Todos'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Filter className="w-4 h-4" />
                Todos
              </button>
              <button
                onClick={() => setSelectedFilter('Fruta')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  selectedFilter === 'Fruta'
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Apple className="w-4 h-4" />
                Frutas
              </button>
              <button
                onClick={() => setSelectedFilter('Verdura')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  selectedFilter === 'Verdura'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Carrot className="w-4 h-4" />
                Verduras
              </button>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold text-emerald-600">{filteredProducts.length}</span> productos
            {searchTerm && (
              <span> para "<span className="font-semibold">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((producto, index) => (
            <ProductCard
              key={index}
              producto={producto}
              onClick={onProductClick}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-500">
              Intenta con otros términos de búsqueda o filtros
            </p>
          </div>
        )}
      </div>
    </div>
  );
};