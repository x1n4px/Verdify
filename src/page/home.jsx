"use client"

import { useState, useEffect } from "react"
import { Search, ChevronDown, ArrowLeft } from "lucide-react"

// Datos de frutas con información nutricional completa
const frutasData = [
    {
        "ES": "Aguacate",
        "EN":"Avocado",
        "tipo": "Fruta",
        "macros": {
            "calorias": 141.0,
            "proteinas": 1.5,
            "grasas": 12.0,
            "AGSaturados": 1.41,
            "AGMonoInSaturados": 9.01,
            "AGPoliinsaturados": 1.04,
            "Omega3": 0.046,
            "C182Linoleico": 0.986,
            "Colesterol": 0.0,
            "carbohidratos": 5.9,
            "fibra": 1.8,
            "agua": 78.8,
            "minerales": {
                "calcio": 16.0,
                "Hierro": 0.7,
                "Yodo": 2.0,
                "Magnesio": 41.0,
                "Zinc": 0.3,
                "Sodio": 2.0,
                "Potasio": 400.0,
                "Fosforo": 28.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.09,
                "Riboflavina": 0.12,
                "Niacina": 1.5,
                "B8": 0.42,
                "Folatos": 11.0,
                "B12": 0.0,
                "C": 17.0,
                "A": 25.0,
                "D": 0.0,
                "E": 3.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://exoticfruitbox.com/wp-content/uploads/2015/10/aguacate.jpg"
    },
    {
        "ES": "Albaricoque",
        "EN":"Apricot",
        "tipo": "Fruta",
        "macros": {
            "calorias": 45.0,
            "proteinas": 0.8,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 9.5,
            "fibra": 2.1,
            "agua": 87.6,
            "minerales": {
                "calcio": 17.0,
                "Hierro": 0.5,
                "Yodo": 0.0,
                "Magnesio": 12.0,
                "Zinc": 0.1,
                "Sodio": 1.0,
                "Potasio": 293.0,
                "Fosforo": 24.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.05,
                "Riboflavina": 0.07,
                "Niacina": 0.6,
                "B8": 0.07,
                "Folatos": 5.0,
                "B12": 0.0,
                "C": 7.0,
                "A": 27.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://soycomocomo.es/media/2015/06/albercoco-600.gif"
    },
    {
        "ES": "Caqui",
        "EN":"Persimmon",
        "tipo": "Fruta",
        "macros": {
            "calorias": 73.0,
            "proteinas": 0.7,
            "grasas": 0.3,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 16.0,
            "fibra": 1.6,
            "agua": 81.4,
            "minerales": {
                "calcio": 8.0,
                "Hierro": 0.24,
                "Yodo": 0.0,
                "Magnesio": 9.5,
                "Zinc": 0.1,
                "Sodio": 4.0,
                "Potasio": 190.0,
                "Fosforo": 22.0,
                "Selenio": 0.6
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.04,
                "Niacina": 0.3,
                "B8": 0.0,
                "Folatos": 7.0,
                "B12": 0.0,
                "C": 16.0,
                "A": 158.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://fruittoday.com/wp-content/uploads/2022/09/caqui-engorda.jpg"
    },
    {
        "ES": "Cereza",
        "EN":"Cherry",
        "tipo": "Fruta",
        "macros": {
            "calorias": 65.0,
            "proteinas": 0.8,
            "grasas": 0.5,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 13.5,
            "fibra": 1.5,
            "agua": 83.7,
            "minerales": {
                "calcio": 16.0,
                "Hierro": 0.4,
                "Yodo": 2.0,
                "Magnesio": 11.0,
                "Zinc": 0.12,
                "Sodio": 2.0,
                "Potasio": 255.0,
                "Fosforo": 21.0,
                "Selenio": 1.2
            },
            "vitaminas": {
                "Tiamina": 0.05,
                "Riboflavina": 0.06,
                "Niacina": 0.4,
                "B8": 0.05,
                "Folatos": 8.0,
                "B12": 0.0,
                "C": 8.0,
                "A": 3.0,
                "D": 0.0,
                "E": 0.1
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGw7o1aVv7SjG5aCOs0LDS_kZRtQzO32QQsw&s"
    },
    {
        "ES": "Chirimoya",
        "EN":"Chirimoya",
        "tipo": "Fruta",
        "macros": {
            "calorias": 90.0,
            "proteinas": 1.0,
            "grasas": 0.2,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 20.0,
            "fibra": 1.9,
            "agua": 76.9,
            "minerales": {
                "calcio": 30.0,
                "Hierro": 0.6,
                "Yodo": 0.0,
                "Magnesio": 0.0,
                "Zinc": 0.0,
                "Sodio": 4.0,
                "Potasio": 382.0,
                "Fosforo": 21.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.08,
                "Riboflavina": 0.09,
                "Niacina": 0.9,
                "B8": 0.0,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 18.0,
                "A": 0.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.frutiban.com/wp-content/uploads/2017/12/chirimoya.jpg"
    },
    {
        "ES": "Ciruela",
        "EN":"Plum",
        "tipo": "Fruta",
        "macros": {
            "calorias": 51.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 11.0,
            "fibra": 2.1,
            "agua": 86.3,
            "minerales": {
                "calcio": 14.0,
                "Hierro": 0.4,
                "Yodo": 2.0,
                "Magnesio": 8.0,
                "Zinc": 0.1,
                "Sodio": 2.0,
                "Potasio": 214.0,
                "Fosforo": 19.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.07,
                "Riboflavina": 0.05,
                "Niacina": 0.5,
                "B8": 0.05,
                "Folatos": 3.0,
                "B12": 0.0,
                "C": 3.0,
                "A": 49.2,
                "D": 0.0,
                "E": 0.7
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.frutasluzon.com/wp-content/uploads/2018/07/CIRUELA-ROJA-600x399.jpg"
    },
    {
        "ES": "Coco",
        "EN":"Coconut",
        "tipo": "Fruta",
        "macros": {
            "calorias": 373.0,
            "proteinas": 3.2,
            "grasas": 36.0,
            "AGSaturados": 30.9,
            "AGMonoInSaturados": 2.4,
            "AGPoliinsaturados": 0.61,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 3.7,
            "fibra": 10.5,
            "agua": 46.6,
            "minerales": {
                "calcio": 13.0,
                "Hierro": 2.1,
                "Yodo": 1.0,
                "Magnesio": 52.0,
                "Zinc": 0.5,
                "Sodio": 17.0,
                "Potasio": 405.0,
                "Fosforo": 94.0,
                "Selenio": 10.1
            },
            "vitaminas": {
                "Tiamina": 0.03,
                "Riboflavina": 0.02,
                "Niacina": 1.1,
                "B8": 0.04,
                "Folatos": 26.0,
                "B12": 0.0,
                "C": 2.0,
                "A": 0.0,
                "D": 0.0,
                "E": 0.73
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://images.ecestaticos.com/XzFf5fJnhRqdwsyLzg_OYeT3jaY=/0x85:1896x1505/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F03c%2F61a%2Fca3%2F03c61aca3e0d45f3d52402f4ed27ab83.jpg"
    },
    {
        "ES": "Frambuesa",
        "EN":"Rasperry",
        "tipo": "Fruta",
        "macros": {
            "calorias": 40.0,
            "proteinas": 1.4,
            "grasas": 0.3,
            "AGSaturados": 0.1,
            "AGMonoInSaturados": 0.1,
            "AGPoliinsaturados": 0.1,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 4.6,
            "fibra": 6.7,
            "agua": 87.0,
            "minerales": {
                "calcio": 25.0,
                "Hierro": 0.7,
                "Yodo": 0.0,
                "Magnesio": 19.0,
                "Zinc": 0.3,
                "Sodio": 3.0,
                "Potasio": 170.0,
                "Fosforo": 31.0,
                "Selenio": 1.3
            },
            "vitaminas": {
                "Tiamina": 0.03,
                "Riboflavina": 0.05,
                "Niacina": 0.8,
                "B8": 0.06,
                "Folatos": 33.0,
                "B12": 0.0,
                "C": 32.0,
                "A": 1.0,
                "D": 0.0,
                "E": 0.48
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://lh6.googleusercontent.com/proxy/uDDyTBcWXilvgYjaecRumLLk4Zx9Ep9nJgVanLY2z1EL88W87ic6qdJX31DpbtTv6EadtDLWIIl2HIpfOUOSEu1XGUrJiHvwkxm9yarV8vyxsWw"
    },
    {
        "ES": "Fresa",
        "EN":"Strawberry",
        "tipo": "Fruta",
        "macros": {
            "calorias": 40.0,
            "proteinas": 0.7,
            "grasas": 0.5,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 7.0,
            "fibra": 2.2,
            "agua": 89.6,
            "minerales": {
                "calcio": 25.0,
                "Hierro": 0.8,
                "Yodo": 8.0,
                "Magnesio": 12.0,
                "Zinc": 0.1,
                "Sodio": 2.0,
                "Potasio": 190.0,
                "Fosforo": 26.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.04,
                "Niacina": 0.6,
                "B8": 0.06,
                "Folatos": 20.0,
                "B12": 0.0,
                "C": 60.0,
                "A": 1.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://static.libertyprim.com/files/familles/fraise-large.jpg?1569271765"
    },
    {
        "ES": "Granada",
        "EN":"Pomegranate",
        "tipo": "Fruta",
        "macros": {
            "calorias": 34.0,
            "proteinas": 0.7,
            "grasas": 0.1,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 7.5,
            "fibra": 0.2,
            "agua": 91.5,
            "minerales": {
                "calcio": 8.0,
                "Hierro": 0.6,
                "Yodo": 0.0,
                "Magnesio": 3.0,
                "Zinc": 0.3,
                "Sodio": 5.0,
                "Potasio": 275.0,
                "Fosforo": 15.0,
                "Selenio": 0.6
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.02,
                "Niacina": 0.3,
                "B8": 0.11,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 5.7,
                "A": 3.5,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://s1.ppllstatics.com/elcorreo/www/multimedia/202301/23/media/cortadas/despensa26-kUHH-U1903686388111LF-1248x770@El%20Correo.jpg"
    },
    {
        "ES": "Grosella",
        "EN":"Gooseberry",
        "tipo": "Fruta",
        "macros": {
            "calorias": 32.0,
            "proteinas": 1.1,
            "grasas": 0.2,
            "AGSaturados": 0.039,
            "AGMonoInSaturados": 0.029,
            "AGPoliinsaturados": 0.073,
            "Omega3": 0.032,
            "C182Linoleico": 0.041,
            "Colesterol": 0.0,
            "carbohidratos": 4.8,
            "fibra": 3.5,
            "agua": 90.4,
            "minerales": {
                "calcio": 29.0,
                "Hierro": 0.9,
                "Yodo": 1.0,
                "Magnesio": 13.0,
                "Zinc": 0.24,
                "Sodio": 1.3,
                "Potasio": 257.0,
                "Fosforo": 27.0,
                "Selenio": 1.3
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.03,
                "Niacina": 0.3,
                "B8": 0.045,
                "Folatos": 11.0,
                "B12": 0.0,
                "C": 36.0,
                "A": 4.2,
                "D": 0.0,
                "E": 0.72
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://static.libertyprim.com/files/familles/groseille-large.jpg?1569271784"
    },
    {
        "ES": "Higo",
        "EN":"Fig",
        "tipo": "Fruta",
        "macros": {
            "calorias": 85.0,
            "proteinas": 1.2,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 16.0,
            "fibra": 2.5,
            "agua": 80.3,
            "minerales": {
                "calcio": 38.0,
                "Hierro": 0.6,
                "Yodo": 0.0,
                "Magnesio": 20.0,
                "Zinc": 0.3,
                "Sodio": 2.0,
                "Potasio": 270.0,
                "Fosforo": 22.5,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.06,
                "Riboflavina": 0.05,
                "Niacina": 0.5,
                "B8": 0.11,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 2.0,
                "A": 8.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://frutasolivar.com/wp-content/uploads/2020/08/higos.jpg.webp"
    },
    {
        "ES": "Kiwi",
        "EN":"Kiwi",
        "tipo": "Fruta",
        "macros": {
            "calorias": 55.0,
            "proteinas": 1.1,
            "grasas": 0.5,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 10.6,
            "fibra": 1.9,
            "agua": 85.9,
            "minerales": {
                "calcio": 25.0,
                "Hierro": 0.4,
                "Yodo": 0.0,
                "Magnesio": 15.0,
                "Zinc": 0.1,
                "Sodio": 4.0,
                "Potasio": 290.0,
                "Fosforo": 35.0,
                "Selenio": 0.6
            },
            "vitaminas": {
                "Tiamina": 0.01,
                "Riboflavina": 0.03,
                "Niacina": 0.6,
                "B8": 0.15,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 59.0,
                "A": 3.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/14.jpg"
    },
    {
        "ES": "Limon",
        "EN":"Lemon",
        "tipo": "Fruta",
        "macros": {
            "calorias": 44.0,
            "proteinas": 0.7,
            "grasas": 0.4,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 9.0,
            "fibra": 1.0,
            "agua": 88.9,
            "minerales": {
                "calcio": 12.0,
                "Hierro": 0.4,
                "Yodo": 3.0,
                "Magnesio": 18.0,
                "Zinc": 0.12,
                "Sodio": 3.0,
                "Potasio": 149.0,
                "Fosforo": 16.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.05,
                "Riboflavina": 0.03,
                "Niacina": 0.17,
                "B8": 0.11,
                "Folatos": 7.0,
                "B12": 0.0,
                "C": 50.0,
                "A": 2.3,
                "D": 0.0,
                "E": 0.5
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.quironsalud.com/idcsalud-client/cm/images?locale=es_ES&idMmedia=3153140"
    },
    {
        "ES": "Mandarina",
        "EN":"Tangerine",
        "tipo": "Fruta",
        "macros": {
            "calorias": 43.0,
            "proteinas": 0.8,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 9.0,
            "fibra": 1.9,
            "agua": 88.3,
            "minerales": {
                "calcio": 36.0,
                "Hierro": 0.3,
                "Yodo": 0.0,
                "Magnesio": 11.0,
                "Zinc": 0.4,
                "Sodio": 2.0,
                "Potasio": 160.0,
                "Fosforo": 17.2,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.07,
                "Riboflavina": 0.02,
                "Niacina": 0.3,
                "B8": 0.07,
                "Folatos": 21.0,
                "B12": 0.0,
                "C": 35.0,
                "A": 56.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogVDB3L-XFrOl6NGZWDChMVrqo4e_vUt7hA&s"
    },
    {
        "ES": "Manzana",
        "EN":"Apple",
        "tipo": "Fruta",
        "macros": {
            "calorias": 53.0,
            "proteinas": 0.3,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 12.0,
            "fibra": 2.0,
            "agua": 85.7,
            "minerales": {
                "calcio": 6.0,
                "Hierro": 0.4,
                "Yodo": 2.0,
                "Magnesio": 5.0,
                "Zinc": 0.1,
                "Sodio": 12.0,
                "Potasio": 120.0,
                "Fosforo": 16.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.04,
                "Niacina": 0.2,
                "B6": 0.03,
                "Folatos": 5.0,
                "B12": 0.0,
                "C": 2.0,
                "A": 3.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://5aldia.cl/wp-content/uploads/2018/03/manzana.jpg"
    },
    {
        "ES": "Melocotón",
        "EN":"Peach",
        "tipo": "Fruta",
        "macros": {
            "calorias": 41.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 9.0,
            "fibra": 1.4,
            "agua": 89.0,
            "minerales": {
                "calcio": 8.0,
                "Hierro": 0.4,
                "Yodo": 3.0,
                "Magnesio": 9.0,
                "Zinc": 0.06,
                "Sodio": 3.0,
                "Potasio": 260.0,
                "Fosforo": 22.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.03,
                "Riboflavina": 0.05,
                "Niacina": 1.0,
                "B6": 0.02,
                "Folatos": 3.0,
                "B12": 0.0,
                "C": 8.0,
                "A": 83.3,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://lh6.googleusercontent.com/proxy/E5CY5Q6vG1Gag5WVAU-RSrg4s-xmkZiV5B7-EBS2B68f1rYNugQyldT_Z9brbe7TpFB8jSkmmxFq1MiXHikTHqiz6VtaMnRmBv1ID1TAKWfU2KWy4-CKD7xEObEW53hcxcP0FH_xiQ2tv1Js"
    },
    {
        "ES": "Melocoton en almibar",
        "EN":"Syrupe peach",
        "tipo": "Fruta",
        "macros": {
            "calorias": 92.0,
            "proteinas": 0.4,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 22.0,
            "fibra": 1.0,
            "agua": 76.6,
            "minerales": {
                "calcio": 6.0,
                "Hierro": 0.4,
                "Yodo": 2.0,
                "Magnesio": 6.0,
                "Zinc": 0.03,
                "Sodio": 1.0,
                "Potasio": 150.0,
                "Fosforo": 13.0,
                "Selenio": 0.3
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.02,
                "Niacina": 0.0,
                "B8": 0.02,
                "Folatos": 3.0,
                "B12": 0.0,
                "C": 4.0,
                "A": 42.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://st2.depositphotos.com/1821481/12345/i/450/depositphotos_123455572-stock-photo-peaches-in-syrup-on-a.jpg"
    },
    {
        "ES": "Melon",
        "EN":"Melon",
        "tipo": "Fruta",
        "macros": {
            "calorias": 28.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 6.0,
            "fibra": 1.0,
            "agua": 92.4,
            "minerales": {
                "calcio": 14.0,
                "Hierro": 0.4,
                "Yodo": 0.0,
                "Magnesio": 17.0,
                "Zinc": 0.1,
                "Sodio": 14.0,
                "Potasio": 320.0,
                "Fosforo": 18.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.02,
                "Niacina": 0.5,
                "B8": 0.07,
                "Folatos": 30.0,
                "B12": 0.0,
                "C": 25.0,
                "A": 3.0,
                "D": 0.0,
                "E": 0.1
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3392/w700_melon.jpg"
    },
    {
        "ES": "Membrillo",
        "EN":"Quince",
        "tipo": "Fruta",
        "macros": {
            "calorias": 42.0,
            "proteinas": 0.4,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 6.8,
            "fibra": 6.4,
            "agua": 86.4,
            "minerales": {
                "calcio": 14.0,
                "Hierro": 0.4,
                "Yodo": 0.0,
                "Magnesio": 6.0,
                "Zinc": 3.0,
                "Sodio": 3.0,
                "Potasio": 200.0,
                "Fosforo": 19.0,
                "Selenio": 0.6
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.02,
                "Niacina": 0.2,
                "B8": 0.0,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 13.0,
                "A": 0.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://static.libertyprim.com/files/familles/coing-large.jpg?1569271744"
    },
    {
        "ES": "Mora",
        "EN":"Blackberry",
        "tipo": "Fruta",
        "macros": {
            "calorias": 39.0,
            "proteinas": 0.9,
            "grasas": 0.2,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.1,
            "AGPoliinsaturados": 0.1,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 5.1,
            "fibra": 6.6,
            "agua": 87.2,
            "minerales": {
                "calcio": 41.0,
                "Hierro": 0.7,
                "Yodo": 0.0,
                "Magnesio": 23.0,
                "Zinc": 0.2,
                "Sodio": 2.0,
                "Potasio": 160.0,
                "Fosforo": 31.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.05,
                "Niacina": 0.6,
                "B8": 0.05,
                "Folatos": 34.0,
                "B12": 0.0,
                "C": 15.0,
                "A": 13.3,
                "D": 0.0,
                "E": 2.37
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://5aldia.cl/wp-content/uploads/2018/03/mora.jpg"
    },
    {
        "ES": "Naranja",
        "EN":"Orange",
        "tipo": "Fruta",
        "macros": {
            "calorias": 42.0,
            "proteinas": 0.8,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 8.6,
            "fibra": 2.0,
            "agua": 88.6,
            "minerales": {
                "calcio": 36.0,
                "Hierro": 0.3,
                "Yodo": 2.0,
                "Magnesio": 12.0,
                "Zinc": 0.18,
                "Sodio": 3.0,
                "Potasio": 200.0,
                "Fosforo": 28.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.1,
                "Riboflavina": 0.03,
                "Niacina": 0.3,
                "B8": 0.06,
                "Folatos": 37.0,
                "B12": 0.0,
                "C": 50.0,
                "A": 40.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://i.pinimg.com/550x/b2/38/62/b23862aabbcdc7146588c4fa641c7414.jpg"
    },
    {
        "ES": "Nispero",
        "EN":"Ioquat",
        "tipo": "Fruta",
        "macros": {
            "calorias": 69.0,
            "proteinas": 0.4,
            "grasas": 0.5,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 10.6,
            "fibra": 10.2,
            "agua": 78.3,
            "minerales": {
                "calcio": 30.0,
                "Hierro": 0.4,
                "Yodo": 0.0,
                "Magnesio": 11.0,
                "Zinc": 0.18,
                "Sodio": 6.0,
                "Potasio": 250.0,
                "Fosforo": 28.0,
                "Selenio": 0.5
            },
            "vitaminas": {
                "Tiamina": 0.03,
                "Riboflavina": 0.06,
                "Niacina": 0.4,
                "B8": 0.0,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 2.0,
                "A": 160.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://safirfruits.es/wp-content/uploads/2021/11/nispero-3-Exotic-1024x971.jpg"
    },
    {
        "ES": "Pera",
        "EN":"Pear",
        "tipo": "Fruta",
        "macros": {
            "calorias": 49.0,
            "proteinas": 0.4,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 10.6,
            "fibra": 2.3,
            "agua": 86.7,
            "minerales": {
                "calcio": 12.0,
                "Hierro": 0.2,
                "Yodo": 2.0,
                "Magnesio": 7.0,
                "Zinc": 0.14,
                "Sodio": 2.0,
                "Potasio": 130.0,
                "Fosforo": 17.5,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.03,
                "Riboflavina": 0.03,
                "Niacina": 0.2,
                "B8": 0.02,
                "Folatos": 11.0,
                "B12": 0.0,
                "C": 3.0,
                "A": 10.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.herbazest.com/imgs/d/8/7/551784/pera.jpg"
    },
    {
        "ES": "Piña",
        "EN":"Pineapple",
        "tipo": "Fruta",
        "macros": {
            "calorias": 50.0,
            "proteinas": 0.5,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 11.5,
            "fibra": 1.2,
            "agua": 86.8,
            "minerales": {
                "calcio": 12.0,
                "Hierro": 0.5,
                "Yodo": 30.0,
                "Magnesio": 14.0,
                "Zinc": 0.15,
                "Sodio": 2.0,
                "Potasio": 250.0,
                "Fosforo": 11.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.07,
                "Riboflavina": 0.02,
                "Niacina": 0.3,
                "B8": 0.09,
                "Folatos": 11.0,
                "B12": 0.0,
                "C": 20.0,
                "A": 13.0,
                "D": 0.0,
                "E": 0.1
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.gob.mx/cms/uploads/image/file/415269/pi_a_1.jpg"
    },
    {
        "ES": "Platano",
        "EN":"Banana",
        "tipo": "Fruta",
        "macros": {
            "calorias": 94.0,
            "proteinas": 1.2,
            "grasas": 0.3,
            "AGSaturados": 0.11,
            "AGMonoInSaturados": 0.04,
            "AGPoliinsaturados": 0.09,
            "Omega3": 0.052,
            "C182Linoleico": 0.039,
            "Colesterol": 0.0,
            "carbohidratos": 20.0,
            "fibra": 3.4,
            "agua": 75.1,
            "minerales": {
                "calcio": 9.0,
                "Hierro": 0.6,
                "Yodo": 2.0,
                "Magnesio": 38.0,
                "Zinc": 0.23,
                "Sodio": 1.0,
                "Potasio": 350.0,
                "Fosforo": 28.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.06,
                "Riboflavina": 0.07,
                "Niacina": 0.8,
                "B8": 0.51,
                "Folatos": 22.0,
                "B12": 0.0,
                "C": 10.0,
                "A": 18.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://esnaturalbarcelona.com/wp-content/uploads/2018/09/platanos-de-canarias.jpg"
    },
    {
        "ES": "Pomelo",
        "EN":"Grapefruit",
        "tipo": "Fruta",
        "macros": {
            "calorias": 35.0,
            "proteinas": 0.8,
            "grasas": 0.1,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 6.8,
            "fibra": 1.6,
            "agua": 90.7,
            "minerales": {
                "calcio": 23.0,
                "Hierro": 0.1,
                "Yodo": 0.0,
                "Magnesio": 9.0,
                "Zinc": 0.0,
                "Sodio": 3.0,
                "Potasio": 200.0,
                "Fosforo": 20.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.05,
                "Riboflavina": 0.02,
                "Niacina": 0.4,
                "B8": 0.03,
                "Folatos": 26.0,
                "B12": 0.0,
                "C": 36.0,
                "A": 2.0,
                "D": 0.0,
                "E": 0.19
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://t1.uc.ltmcdn.com/es/posts/5/3/5/contraindicaciones_del_pomelo_39535_orig.jpg"
    },
    {
        "ES": "Sandia",
        "EN":"Watermelon",
        "tipo": "Fruta",
        "macros": {
            "calorias": 21.0,
            "proteinas": 0.4,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 4.5,
            "fibra": 0.5,
            "agua": 94.6,
            "minerales": {
                "calcio": 7.0,
                "Hierro": 0.3,
                "Yodo": 0.0,
                "Magnesio": 11.0,
                "Zinc": 0.1,
                "Sodio": 4.0,
                "Potasio": 120.0,
                "Fosforo": 5.5,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.02,
                "Niacina": 0.3,
                "B8": 0.07,
                "Folatos": 3.0,
                "B12": 0.0,
                "C": 5.0,
                "A": 33.0,
                "D": 0.0,
                "E": 0.1
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://ofercampo.co/uploads/products/57/image-20201109-223823655.jpg"
    },
    {
        "ES": "Uva",
        "EN":"Grape",
        "tipo": "Fruta",
        "macros": {
            "calorias": 69.0,
            "proteinas": 0.6,
            "grasas": 0.0,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 16.1,
            "fibra": 0.9,
            "agua": 82.4,
            "minerales": {
                "calcio": 17.0,
                "Hierro": 0.4,
                "Yodo": 2.0,
                "Magnesio": 10.0,
                "Zinc": 0.1,
                "Sodio": 2.0,
                "Potasio": 250.0,
                "Fosforo": 22.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.02,
                "Niacina": 0.3,
                "B8": 0.1,
                "Folatos": 6.0,
                "B12": 0.0,
                "C": 4.0,
                "A": 3.0,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.gastronomiavasca.net/uploads/image/file/3436/uva_morada.jpg"
    },
    {
        "ES": "Acelga",
        "EN":"Chard",
        "tipo": "Verdura",
        "macros": {
            "calorias": 41.0,
            "proteinas": 2.0,
            "grasas": 0.4,
            "AGSaturados": 0.03,
            "AGMonoInSaturados": 0.04,
            "AGPoliinsaturados": 0.07,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 4.5,
            "fibra": 5.6,
            "agua": 87.5,
            "minerales": {
                "calcio": 113.0,
                "Hierro": 3.0,
                "Yodo": 35.0,
                "Magnesio": 71.0,
                "Zinc": 0.02,
                "Sodio": 147.0,
                "Potasio": 550.0,
                "Fosforo": 40.0,
                "Selenio": 0.9
            },
            "vitaminas": {
                "Tiamina": 0.07,
                "Riboflavina": 0.06,
                "Niacina": 2.1,
                "B8": 0.0,
                "Folatos": 140.0,
                "B12": 0.0,
                "C": 20.0,
                "A": 183.0,
                "D": 0.0,
                "E": 0.03
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://imgs.search.brave.com/kOgzu5t_6yZ3gIuaPjc_ItfxnC1dv6CrGCVVVtFOk8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5w/cGxsc3RhdGljcy5j/b20vZGlhcmlvdmFz/Y28vd3d3L211bHRp/bWVkaWEvMjAyMy8x/MS8xMy9BQ0VMR0FT/d2ViLVJQVUx6aGRP/SzlXcmR1bTkwRENO/N1JLLTEyMDB4ODQw/QERpYXJpbyUyMFZh/c2NvLmpwZw"
    },
    {
        "ES": "Ajo",
        "EN":"Garlic",
        "tipo": "Verdura",
        "macros": {
            "calorias": 118.0,
            "proteinas": 5.3,
            "grasas": 0.3,
            "AGSaturados": 0.05,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.15,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 23.0,
            "fibra": 1.1,
            "agua": 70.3,
            "minerales": {
                "calcio": 14.0,
                "Hierro": 1.5,
                "Yodo": 94.0,
                "Magnesio": 25.0,
                "Zinc": 1.0,
                "Sodio": 19.0,
                "Potasio": 529.0,
                "Fosforo": 134.0,
                "Selenio": 2.0
            },
            "vitaminas": {
                "Tiamina": 0.16,
                "Riboflavina": 0.02,
                "Niacina": 1.3,
                "B8": 0.38,
                "Folatos": 5.0,
                "B12": 0.0,
                "C": 11.0,
                "A": 0.0,
                "D": 0.0,
                "E": 0.01
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.sorianatural.es/img/plantas-gallery/0ke9vx4ebekpg3zhiuhjthuwpimuvb/F0000002649_ajo_planta_soria_natural.jpg.jpg"
    },
    {
        "ES": "Alcachofa",
        "EN":"Artichoke",
        "tipo": "Verdura",
        "macros": {
            "calorias": 44.0,
            "proteinas": 2.3,
            "grasas": 0.1,
            "AGSaturados": 0.02,
            "AGMonoInSaturados": 0.01,
            "AGPoliinsaturados": 0.05,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 7.5,
            "fibra": 2.0,
            "agua": 88.1,
            "minerales": {
                "calcio": 45.0,
                "Hierro": 1.5,
                "Yodo": 1.0,
                "Magnesio": 12.0,
                "Zinc": 0.1,
                "Sodio": 47.0,
                "Potasio": 430.0,
                "Fosforo": 130.0,
                "Selenio": 0.7
            },
            "vitaminas": {
                "Tiamina": 0.11,
                "Riboflavina": 0.03,
                "Niacina": 0.6,
                "B8": 0.07,
                "Folatos": 13.0,
                "B12": 0.0,
                "C": 9.0,
                "A": 8.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.obesidadenmallorca.com/wp-content/uploads/2019/03/images_blog_obesidad-en-mallorca-alcachofa.jpg"
    },
    {
        "ES": "Alcaparra",
        "EN":"Caper",
        "tipo": "Verdura",
        "macros": {
            "calorias": 44.0,
            "proteinas": 2.4,
            "grasas": 0.9,
            "AGSaturados": 0.23,
            "AGMonoInSaturados": 0.06,
            "AGPoliinsaturados": 0.3,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 4.9,
            "fibra": 3.2,
            "agua": 88.6,
            "minerales": {
                "calcio": 40.0,
                "Hierro": 1.67,
                "Yodo": 0.0,
                "Magnesio": 33.0,
                "Zinc": 0.32,
                "Sodio": 2.964,
                "Potasio": 40.0,
                "Fosforo": 10.0,
                "Selenio": 1.2
            },
            "vitaminas": {
                "Tiamina": 0.02,
                "Riboflavina": 0.14,
                "Niacina": 0.65,
                "B8": 0.02,
                "Folatos": 0.0,
                "B12": 0.0,
                "C": 4.3,
                "A": 14.0,
                "D": 0.0,
                "E": 0.9
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://imgs.search.brave.com/Ik9Q0F-f6-fDktXZXf6zCQieyNe64E8HidipU0Te6cc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzA0Lzk1Lzk3/LzM2MF9GXzUwNDk1/OTc5NV80QWNuNlB0/bWpVT3lNa3c2RUE1/UURHQ2M2TWNWSEZF/NS5qcGc"
    },
    {
        "ES": "Apio",
        "EN":"Celery",
        "tipo": "Verdura",
        "macros": {
            "calorias": 16.0,
            "proteinas": 1.3,
            "grasas": 0.2,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.1,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 1.3,
            "fibra": 1.8,
            "agua": 95.4,
            "minerales": {
                "calcio": 55.0,
                "Hierro": 0.6,
                "Yodo": 0.0,
                "Magnesio": 15.0,
                "Zinc": 0.1,
                "Sodio": 126.0,
                "Potasio": 341.0,
                "Fosforo": 32.0,
                "Selenio": 3.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.04,
                "Niacina": 0.7,
                "B8": 0.1,
                "Folatos": 12.0,
                "B12": 0.0,
                "C": 7.0,
                "A": 95.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://imgs.search.brave.com/bzORGB27KhaokEaJGmb7aGorOwkKxeWJCXU0YYrffqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHJlbnNhbGlicmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI0LzAyL1BhcmEt/cXVlLXNpcnZlLWVs/LWFwaW8teS1zdXMt/YmVuZWZpY2lvcy0y/LmpwZz9xdWFsaXR5/PTUy"
    },
    {
        "ES": "Batata",
        "EN":"Sweet potato",
        "tipo": "Verdura",
        "macros": {
            "calorias": 101.0,
            "proteinas": 1.2,
            "grasas": 0.6,
            "AGSaturados": 0.23,
            "AGMonoInSaturados": 0.04,
            "AGPoliinsaturados": 0.2,
            "Omega3": 0.033,
            "C182Linoleico": 0.165,
            "Colesterol": 0.0,
            "carbohidratos": 21.5,
            "fibra": 2.5,
            "agua": 74.2,
            "minerales": {
                "calcio": 22.0,
                "Hierro": 0.7,
                "Yodo": 2.0,
                "Magnesio": 13.0,
                "Zinc": 0.3,
                "Sodio": 19.0,
                "Potasio": 320.0,
                "Fosforo": 60.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.1,
                "Riboflavina": 0.06,
                "Niacina": 1.2,
                "B8": 0.22,
                "Folatos": 52.0,
                "B12": 0.0,
                "C": 25.0,
                "A": 667.0,
                "D": 0.0,
                "E": 4.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://imgs.search.brave.com/p2d6RTeSWB9Ha16Kyy3kZTy7BgDjp68DPY5SmWnYvRw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tbGN2/a29jcmZwb28uaS5v/cHRpbW9sZS5jb20v/dzphdXRvL2g6YXV0/by9xOm1hdXRvL2Y6/YXZpZi9odHRwczov/L3d3dy5lY29vcGVy/YXRpdmFzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8x/MS9iYXRhdGEuanBn"
    },
    {
        "ES": "Berenjena",
        "EN":"Eggplant",
        "tipo": "Verdura",
        "macros": {
            "calorias": 27.0,
            "proteinas": 1.2,
            "grasas": 0.2,
            "AGSaturados": 0.05,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.1,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 4.4,
            "fibra": 1.2,
            "agua": 93.0,
            "minerales": {
                "calcio": 11.0,
                "Hierro": 0.7,
                "Yodo": 2.0,
                "Magnesio": 12.0,
                "Zinc": 0.28,
                "Sodio": 2.0,
                "Potasio": 214.0,
                "Fosforo": 21.4,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.05,
                "Niacina": 0.6,
                "B8": 0.08,
                "Folatos": 18.0,
                "B12": 0.0,
                "C": 6.0,
                "A": 3.0,
                "D": 0.0,
                "E": 0.03
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://www.gastronomiavasca.net/uploads/image/file/5702/w700_berenjena1.jpg"
    },
    {
        "ES": "Berros",
        "EN":"Watercress",
        "tipo": "Verdura",
        "macros": {
            "calorias": 29.0,
            "proteinas": 3.0,
            "grasas": 1.0,
            "AGSaturados": 0.3,
            "AGMonoInSaturados": 0.1,
            "AGPoliinsaturados": 0.4,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 0.4,
            "fibra": 3.0,
            "agua": 92.6,
            "minerales": {
                "calcio": 170.0,
                "Hierro": 2.2,
                "Yodo": 0.0,
                "Magnesio": 15.0,
                "Zinc": 0.7,
                "Sodio": 49.0,
                "Potasio": 230.0,
                "Fosforo": 52.0,
                "Selenio": 0.9
            },
            "vitaminas": {
                "Tiamina": 0.16,
                "Riboflavina": 0.06,
                "Niacina": 0.3,
                "B8": 0.23,
                "Folatos": 214.0,
                "B12": 0.0,
                "C": 62.0,
                "A": 420.0,
                "D": 0.0,
                "E": 1.46
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://static.elnortedecastilla.es/www/multimedia/201903/12/media/cortadas/berros-kTQE-U70890917574eCF-624x385@El%20Norte.jpg"
    },
    {
        "ES": "Berza",
        "EN":"Collard greens",
        "tipo": "Verdura",
        "macros": {
            "calorias": 36.0,
            "proteinas": 3.3,
            "grasas": 0.3,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.1,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 3.4,
            "fibra": 3.3,
            "agua": 89.7,
            "minerales": {
                "calcio": 40.0,
                "Hierro": 0.8,
                "Yodo": 0.0,
                "Magnesio": 13.0,
                "Zinc": 0.3,
                "Sodio": 12.0,
                "Potasio": 310.0,
                "Fosforo": 53.0,
                "Selenio": 2.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.08,
                "Niacina": 1.1,
                "B8": 0.16,
                "Folatos": 79.0,
                "B12": 0.0,
                "C": 65.0,
                "A": 4.0,
                "D": 0.0,
                "E": 0.2
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://escofruit.com/wp-content/uploads/2023/02/berza-verde-aislado-sobre-fondo-blanco.jpg"
    },
    {
        "ES": "Brócoli",
        "EN":"Brocoli",
        "tipo": "Verdura",
        "macros": {
            "calorias": 38.0,
            "proteinas": 4.4,
            "grasas": 0.8,
            "AGSaturados": 0.2,
            "AGMonoInSaturados": 0.1,
            "AGPoliinsaturados": 0.5,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 1.8,
            "fibra": 2.6,
            "agua": 90.3,
            "minerales": {
                "calcio": 56.0,
                "Hierro": 1.7,
                "Yodo": 2.0,
                "Magnesio": 22.0,
                "Zinc": 0.6,
                "Sodio": 8.0,
                "Potasio": 370.0,
                "Fosforo": 87.0,
                "Selenio": 0.0
            },
            "vitaminas": {
                "Tiamina": 0.1,
                "Riboflavina": 0.06,
                "Niacina": 1.7,
                "B8": 0.14,
                "Folatos": 90.0,
                "B12": 0.0,
                "C": 87.0,
                "A": 69.0,
                "D": 0.0,
                "E": 1.3
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://esnd.es/wp-content/uploads/2024/08/broccoli-1450274_1280x1159_resultado.webp"
    },
    {
        "ES": "Calabacín",
        "EN":"Courgette",
        "tipo": "Verdura",
        "macros": {
            "calorias": 14.0,
            "proteinas": 0.6,
            "grasas": 0.2,
            "AGSaturados": 0.0,
            "AGMonoInSaturados": 0.0,
            "AGPoliinsaturados": 0.0,
            "Omega3": 0.0,
            "C182Linoleico": 0.0,
            "Colesterol": 0.0,
            "carbohidratos": 2.2,
            "fibra": 0.5,
            "agua": 96.5,
            "minerales": {
                "calcio": 24.0,
                "Hierro": 0.4,
                "Yodo": 0.0,
                "Magnesio": 8.0,
                "Zinc": 0.2,
                "Sodio": 1.0,
                "Potasio": 140.0,
                "Fosforo": 17.0,
                "Selenio": 1.0
            },
            "vitaminas": {
                "Tiamina": 0.04,
                "Riboflavina": 0.04,
                "Niacina": 0.6,
                "B8": 0.06,
                "Folatos": 13.0,
                "B12": 0.0,
                "C": 22.0,
                "A": 4.5,
                "D": 0.0,
                "E": 0.0
            },
            "glucidos": {
                "glucosa": "",
                "fructosa": ""
            }
        },
        "imagen": "https://alimentamerindades.org/wp-content/uploads/2024/03/CALABACIN-ECOLOGICO-COMEDELAHUERTA-1.jpg"
    }
]

export default function Home() {
  const [busqueda, setBusqueda] = useState("")
  const [frutaSeleccionada, setFrutaSeleccionada] = useState(null)
  const [mostrarDropdown, setMostrarDropdown] = useState(false)
  const [frutasFiltradas, setFrutasFiltradas] = useState(frutasData)
  const [categorias, setCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")
  const [mostrarDetalle, setMostrarDetalle] = useState(false)
  const [animacionSalida, setAnimacionSalida] = useState(false)
  const [tabActiva, setTabActiva] = useState("macros")

  // Extraer categorías únicas
  useEffect(() => {
    const todasCategorias = ["Todas", ...new Set(frutasData.map((fruta) => fruta.tipo))]
    setCategorias(todasCategorias)
  }, [])

  // Filtrar frutas basado en búsqueda y categoría
  useEffect(() => {
    let resultado = frutasData

    if (busqueda) {
      resultado = resultado.filter(
        (fruta) =>
          fruta.ES.toLowerCase().includes(busqueda.toLowerCase()) ||
          fruta.EN.toLowerCase().includes(busqueda.toLowerCase()),
      )
    }

    if (categoriaSeleccionada !== "Todas") {
      resultado = resultado.filter((fruta) => fruta.tipo === categoriaSeleccionada)
    }

    setFrutasFiltradas(resultado)
  }, [busqueda, categoriaSeleccionada])

  // Manejar la selección de una fruta
  const seleccionarFruta = (fruta) => {
    setFrutaSeleccionada(fruta)
    // Pequeño retraso para que la animación se vea bien
    setTimeout(() => {
      setMostrarDetalle(true)
    }, 50)
  }

  // Volver al listado
  const volverAlListado = () => {
    setAnimacionSalida(true)
    setTimeout(() => {
      setMostrarDetalle(false)
      setAnimacionSalida(false)
    }, 300)
  }

  // Formatear valor nutricional
  const formatearValor = (valor) => {
    if (valor === "" || valor === undefined || valor === null) return "-"
    return typeof valor === "number" ? valor.toFixed(1) : valor
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-8">Información Nutricional de Frutas y verduras</h1>

        {!mostrarDetalle ? (
          // Vista de listado
          <div className={`transition-opacity duration-300 ${animacionSalida ? "opacity-0" : "opacity-100"}`}>
            {/* Barra de búsqueda y selector */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Buscar fruta..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>

              <div className="relative w-full md:w-64">
                <button
                  className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  onClick={() => setMostrarDropdown(!mostrarDropdown)}
                >
                  <span>{categoriaSeleccionada}</span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </button>

                {mostrarDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {categorias.map((categoria, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-green-50 cursor-pointer"
                        onClick={() => {
                          setCategoriaSeleccionada(categoria)
                          setMostrarDropdown(false)
                        }}
                      >
                        {categoria}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid de frutas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {frutasFiltradas.length > 0 ? (
                frutasFiltradas.map((fruta) => (
                  <div
                    key={fruta.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
                    onClick={() => seleccionarFruta(fruta)}
                  >
                    <div className="relative h-48 w-full bg-gray-100">
                      <img src={fruta.imagen || "/placeholder.svg"} alt={fruta.ES} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-green-600">{fruta.ES}</h3>
                      <p className="text-gray-600 text-sm">{fruta.EN}</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{fruta.macros.calorias} kcal</span>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Ver detalles</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No se encontraron frutas</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Vista de detalle
          <div
            className={`transition-all duration-300 ${animacionSalida ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            <button
              onClick={volverAlListado}
              className="flex items-center text-green-600 hover:text-green-800 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span>Volver al listado</span>
            </button>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Cabecera con información básica e imagen */}
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <div className="relative h-24 w-24 flex-shrink-0 bg-green-50 rounded-lg overflow-hidden">
                    <img
                      src={frutaSeleccionada.imagen || "/placeholder.svg"}
                      alt={frutaSeleccionada.ES}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-6 flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div>
                        <h2 className="text-3xl font-bold text-green-600">{frutaSeleccionada.ES}</h2>
                        <p className="text-gray-600">
                          {frutaSeleccionada.EN} - {frutaSeleccionada.tipo}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 bg-green-50 px-4 py-2 rounded-lg inline-block">
                        <span className="text-2xl font-bold text-green-700">{frutaSeleccionada.macros.calorias}</span>
                        <span className="text-green-700 ml-1">kcal</span>
                        <p className="text-sm text-green-600">por 100g</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabs para la información nutricional */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="flex space-x-4">
                    <button
                      onClick={() => setTabActiva("macros")}
                      className={`py-2 px-3 text-sm font-medium rounded-t-lg ${
                        tabActiva === "macros"
                          ? "bg-green-100 text-green-700 border-b-2 border-green-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Macronutrientes
                    </button>
                    <button
                      onClick={() => setTabActiva("vitaminas")}
                      className={`py-2 px-3 text-sm font-medium rounded-t-lg ${
                        tabActiva === "vitaminas"
                          ? "bg-green-100 text-green-700 border-b-2 border-green-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Vitaminas
                    </button>
                    <button
                      onClick={() => setTabActiva("minerales")}
                      className={`py-2 px-3 text-sm font-medium rounded-t-lg ${
                        tabActiva === "minerales"
                          ? "bg-green-100 text-green-700 border-b-2 border-green-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Minerales
                    </button>
                    <button
                      onClick={() => setTabActiva("grasas")}
                      className={`py-2 px-3 text-sm font-medium rounded-t-lg ${
                        tabActiva === "grasas"
                          ? "bg-green-100 text-green-700 border-b-2 border-green-500"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Grasas
                    </button>
                  </nav>
                </div>

                {/* Contenido de la pestaña activa */}
                <div className="mb-8">
                  {tabActiva === "macros" && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Macronutrientes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          {/* Carbohidratos */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Carbohidratos</span>
                              <span>{frutaSeleccionada.macros.carbohidratos} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.carbohidratos * 4, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Proteínas */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Proteínas</span>
                              <span>{frutaSeleccionada.macros.proteinas} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-red-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.proteinas * 20, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Grasas */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Grasas</span>
                              <span>{frutaSeleccionada.macros.grasas} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-yellow-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.grasas * 10, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          {/* Fibra */}
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Fibra</span>
                              <span>{frutaSeleccionada.macros.fibra} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-green-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.fibra * 15, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-700 mb-3">Composición</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Agua</span>
                                <span>{frutaSeleccionada.macros.agua}%</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Colesterol</span>
                                <span>{frutaSeleccionada.macros.Colesterol} mg</span>
                              </div>
                              {frutaSeleccionada.macros.glucidos.glucosa && (
                                <div className="flex justify-between">
                                  <span>Glucosa</span>
                                  <span>{formatearValor(frutaSeleccionada.macros.glucidos.glucosa)} g</span>
                                </div>
                              )}
                              {frutaSeleccionada.macros.glucidos.fructosa && (
                                <div className="flex justify-between">
                                  <span>Fructosa</span>
                                  <span>{formatearValor(frutaSeleccionada.macros.glucidos.fructosa)} g</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {tabActiva === "vitaminas" && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Vitaminas</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(frutaSeleccionada.macros.vitaminas).map(([key, value]) => (
                          <div key={key} className="bg-green-50 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">
                                {key === "A" || key === "B12" || key === "C" || key === "D" || key === "E"
                                  ? `Vitamina ${key}`
                                  : key === "Tiamina"
                                    ? "Vitamina B1"
                                    : key === "Riboflavina"
                                      ? "Vitamina B2"
                                      : key === "Niacina"
                                        ? "Vitamina B3"
                                        : key === "B8"
                                          ? "Vitamina B8"
                                          : key === "Folatos"
                                            ? "Ácido Fólico"
                                            : key}
                              </span>
                              <span className="text-green-700 font-semibold">{formatearValor(value)}</span>
                            </div>
                            {value > 0 && (
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                <div
                                  className="bg-green-500 h-1.5 rounded-full"
                                  style={{ width: `${Math.min((value / 50) * 100, 100)}%` }}
                                ></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tabActiva === "minerales" && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Minerales</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(frutaSeleccionada.macros.minerales).map(([key, value]) => (
                          <div key={key} className="bg-blue-50 p-3 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">{key}</span>
                              <span className="text-blue-700 font-semibold">{formatearValor(value)}</span>
                            </div>
                            {value > 0 && (
                              <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                <div
                                  className="bg-blue-500 h-1.5 rounded-full"
                                  style={{
                                    width: `${Math.min(
                                      key === "Potasio"
                                        ? (value / 1000) * 100
                                        : key === "Calcio"
                                          ? (value / 100) * 100
                                          : key === "Magnesio"
                                            ? (value / 100) * 100
                                            : (value / 10) * 100,
                                      100,
                                    )}%`,
                                  }}
                                ></div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tabActiva === "grasas" && (
                    <div>
                      <h3 className="text-xl font-semibold text-green-600 mb-4">Perfil de Grasas</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Grasas Saturadas</span>
                              <span>{frutaSeleccionada.macros.AGSaturados} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-red-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.AGSaturados * 20, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Grasas Monoinsaturadas</span>
                              <span>{frutaSeleccionada.macros.AGMonoInSaturados} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-green-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.AGMonoInSaturados * 10, 100)}%` }}
                              ></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">Grasas Poliinsaturadas</span>
                              <span>{frutaSeleccionada.macros.AGPoliinsaturados} g</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-400 h-2.5 rounded-full"
                                style={{ width: `${Math.min(frutaSeleccionada.macros.AGPoliinsaturados * 20, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium text-yellow-700 mb-3">Ácidos Grasos Específicos</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Omega 3</span>
                                <span>{frutaSeleccionada.macros.Omega3} g</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Ácido Linoleico</span>
                                <span>{frutaSeleccionada.macros.C182Linoleico} g</span>
                              </div>
                            </div>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium text-green-700 mb-2">Proporción de Grasas</h4>
                            <div className="flex items-center justify-center h-20">
                              {frutaSeleccionada.macros.grasas > 0 ? (
                                <div className="flex w-full h-8 rounded-lg overflow-hidden">
                                  <div
                                    className="bg-red-400"
                                    style={{
                                      width: `${(frutaSeleccionada.macros.AGSaturados / frutaSeleccionada.macros.grasas) * 100}%`,
                                    }}
                                  ></div>
                                  <div
                                    className="bg-green-400"
                                    style={{
                                      width: `${(frutaSeleccionada.macros.AGMonoInSaturados / frutaSeleccionada.macros.grasas) * 100}%`,
                                    }}
                                  ></div>
                                  <div
                                    className="bg-blue-400"
                                    style={{
                                      width: `${(frutaSeleccionada.macros.AGPoliinsaturados / frutaSeleccionada.macros.grasas) * 100}%`,
                                    }}
                                  ></div>
                                </div>
                              ) : (
                                <span className="text-gray-500">No contiene grasas</span>
                              )}
                            </div>
                            <div className="flex justify-between text-xs mt-2">
                              <span className="flex items-center">
                                <span className="w-3 h-3 bg-red-400 rounded-full mr-1"></span>
                                Saturadas
                              </span>
                              <span className="flex items-center">
                                <span className="w-3 h-3 bg-green-400 rounded-full mr-1"></span>
                                Monoinsaturadas
                              </span>
                              <span className="flex items-center">
                                <span className="w-3 h-3 bg-blue-400 rounded-full mr-1"></span>
                                Poliinsaturadas
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
