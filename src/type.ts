export interface ComposicionNutricional {
    "Energía (Kcal)": string;
    "Proteínas (g)": string;
    "Lípidos totales (g)": string;
    "AG saturados (g)": string;
    "AG monoinsaturados (g)": string;
    "AG poliinsaturados (g)": string;
    "v-3 (g)*": string;
    "C18:2 Linoleico (v-6) (g)": string;
    "Colesterol (mg/1000 kcal)": string;
    "Hidratos de carbono (g)": string;
    "Fibra (g)": string;
    "Agua (g)": string;
    "Calcio (mg)": string;
    "Hierro (mg)": string;
    "Yodo (µg)": string;
    "Magnesio (mg)": string;
    "Zinc (mg)": string;
    "Sodio (mg)": string;
    "Potasio (mg)": string;
    "Fósforo (mg)": string;
    "Selenio (μg)": string;
    "Tiamina (mg)": string;
    "Riboflavina (mg)": string;
    "Equivalentes niacina (mg)": string;
    "Vitamina B (mg) 6": string;
    "Folatos (μg)": string;
    "Vitamina B (μg) 12": string;
    "Vitamina C (mg)": string;
    "Vitamina A: Eq. Retinol (μg)": string;
    "Vitamina D (μg)": string;
    "Vitamina E (mg)": string;
  }
  
  export interface Producto {
    nombre: string;
    nombre_ingles: string;
    nombre_cientifico: string;
    tipo_producto?: string; // Optional field for product type
    descripcion: string;
    Estacionalidad: string;
    "Porción comestible": string;
    "Fuente de nutrientes y sustancias no nutritivas": string;
    "Valoración nutricional": string;
    "Composición nutricional": ComposicionNutricional;
    image?: string; // Optional field for image URL
  }