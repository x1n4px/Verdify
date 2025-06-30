import React from 'react';
import { ArrowLeft, Calendar, Percent, Info, Zap, Heart, Leaf } from 'lucide-react';

 
export const ProductDetail= ({ producto, onBack }) => {

 console.log(producto)

  const productName = (producto.nombre);
  const englishName = (producto.nombre_ingles);
  const scientificName = (producto.nombre_cientifico);
  const productType = (producto.tipo_producto);
  

  const NutrientRow = ({ label, value, unit }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100">
      <span className="text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">
        {value === '—' ? 'N/D' : `${value}${unit || ''}`}
      </span>
    </div>
  );

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver al catálogo
        </button>

        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
               
              <img
          src={!producto?.image ? `/${producto.nombre}.webp` : producto['image']}
          alt={producto?.nombre || 'Producto'}
          className="w-full h-64 md:h-full object-cover"
        />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  productType === 'Fruta' 
                    ? 'bg-amber-100 text-amber-800' 
                    : 'bg-emerald-100 text-emerald-800'
                }`}>
                  {productType}
                </span>
                <span className="text-emerald-600 font-bold text-2xl">
                  {producto["Composición nutricional"]["Energía (Kcal)"]} kcal
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {productName}
              </h1>
              {englishName && (
                <p className="text-xl text-gray-500 italic mb-2">
                  {englishName}
                </p>
              )}
              {scientificName && (
                <p className="text-lg text-gray-400 italic mb-6">
                  {scientificName}
                </p>
              )}

              <div className="flex items-center gap-4 text-sm mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  <span className="text-gray-600">Temporada:</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                {producto.Estacionalidad}
              </p>

              <div className="flex items-center gap-2">
                <Percent className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">Porción comestible:</span>
                <span className="font-semibold">{producto["Porción comestible"]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Descripción</h2>
          </div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {(producto.descripcion)}
          </div>
        </div>

        {/* Nutritional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Macronutrients */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-gray-900">Macronutrientes</h2>
              <span className="text-sm text-gray-500">(por 100g)</span>
            </div>
            
            <div className="space-y-1">
              <NutrientRow label="Energía" value={producto["Composición nutricional"]["Energía (Kcal)"]} unit=" kcal" />
              <NutrientRow label="Proteínas" value={producto["Composición nutricional"]["Proteínas (g)"]} unit="g" />
              <NutrientRow label="Lípidos totales" value={producto["Composición nutricional"]["Lípidos totales (g)"]} unit="g" />
              <NutrientRow label="AG saturados" value={producto["Composición nutricional"]["AG saturados (g)"]} unit="g" />
              <NutrientRow label="AG monoinsaturados" value={producto["Composición nutricional"]["AG monoinsaturados (g)"]} unit="g" />
              <NutrientRow label="AG poliinsaturados" value={producto["Composición nutricional"]["AG poliinsaturados (g)"]} unit="g" />
              <NutrientRow label="Omega-3" value={producto["Composición nutricional"]["v-3 (g)*"]} unit="g" />
              <NutrientRow label="Hidratos de carbono" value={producto["Composición nutricional"]["Hidratos de carbono (g)"]} unit="g" />
              <NutrientRow label="Fibra" value={producto["Composición nutricional"]["Fibra (g)"]} unit="g" />
              <NutrientRow label="Agua" value={producto["Composición nutricional"]["Agua (g)"]} unit="g" />
            </div>
          </div>

          {/* Minerals */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Minerales</h2>
              <span className="text-sm text-gray-500">(por 100g)</span>
            </div>
            
            <div className="space-y-1">
              <NutrientRow label="Calcio" value={producto["Composición nutricional"]["Calcio (mg)"]} unit="mg" />
              <NutrientRow label="Hierro" value={producto["Composición nutricional"]["Hierro (mg)"]} unit="mg" />
              <NutrientRow label="Yodo" value={producto["Composición nutricional"]["Yodo (µg)"]} unit="μg" />
              <NutrientRow label="Magnesio" value={producto["Composición nutricional"]["Magnesio (mg)"]} unit="mg" />
              <NutrientRow label="Zinc" value={producto["Composición nutricional"]["Zinc (mg)"]} unit="mg" />
              <NutrientRow label="Sodio" value={producto["Composición nutricional"]["Sodio (mg)"]} unit="mg" />
              <NutrientRow label="Potasio" value={producto["Composición nutricional"]["Potasio (mg)"]} unit="mg" />
              <NutrientRow label="Fósforo" value={producto["Composición nutricional"]["Fósforo (mg)"]} unit="mg" />
              <NutrientRow label="Selenio" value={producto["Composición nutricional"]["Selenio (μg)"]} unit="μg" />
            </div>
          </div>
        </div>

        {/* Vitamins */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Vitaminas</h2>
            <span className="text-sm text-gray-500">(por 100g)</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div className="space-y-1">
              <NutrientRow label="Tiamina (B1)" value={producto["Composición nutricional"]["Tiamina (mg)"]} unit="mg" />
              <NutrientRow label="Riboflavina (B2)" value={producto["Composición nutricional"]["Riboflavina (mg)"]} unit="mg" />
              <NutrientRow label="Equivalentes niacina (B3)" value={producto["Composición nutricional"]["Equivalentes niacina (mg)"]} unit="mg" />
              <NutrientRow label="Vitamina B6" value={producto["Composición nutricional"]["Vitamina B (mg) 6"]} unit="mg" />
              <NutrientRow label="Folatos" value={producto["Composición nutricional"]["Folatos (μg)"]} unit="μg" />
            </div>
            <div className="space-y-1">
              <NutrientRow label="Vitamina B12" value={producto["Composición nutricional"]["Vitamina B (μg) 12"]} unit="μg" />
              <NutrientRow label="Vitamina C" value={producto["Composición nutricional"]["Vitamina C (mg)"]} unit="mg" />
              <NutrientRow label="Vitamina A" value={producto["Composición nutricional"]["Vitamina A: Eq. Retinol (μg)"]} unit="μg" />
              <NutrientRow label="Vitamina D" value={producto["Composición nutricional"]["Vitamina D (μg)"]} unit="μg" />
              <NutrientRow label="Vitamina E" value={producto["Composición nutricional"]["Vitamina E (mg)"]} unit="mg" />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fuente de Nutrientes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {producto["Fuente de nutrientes y sustancias no nutritivas"]}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Valoración Nutricional</h3>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {producto["Valoración nutricional"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};