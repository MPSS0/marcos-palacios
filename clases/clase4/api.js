// js/api.js
// Módulo responsable de la comunicación con la API externa (DummyJSON).

const BASE_URL = "https://dummyjson.com/products/category";

const CATEGORIAS_TECH = [
    "smartphones",
    "laptops",
    "mobile-accessories"
];

/**
 * Descarga en paralelo las 3 categorías tecnológicas de DummyJSON,
 * valida las respuestas y combina todos los productos en un único array.
 * @returns {Promise<Array>} Array plano de productos.
 */
export async function descargarProductosTech() {
    const peticiones = CATEGORIAS_TECH.map((categoria) =>
        fetch(`${BASE_URL}/${categoria}`, {
            signal: AbortSignal.timeout(8000)
        })
    );

    const respuestas = await Promise.all(peticiones);

    respuestas.forEach((respuesta) => {
        if (!respuesta.ok) {
            throw new Error(
                `Error de red al consultar la API (${respuesta.status} ${respuesta.statusText})`
            );
        }
    });

    const cuerpos = await Promise.all(
        respuestas.map((respuesta) => respuesta.json())
    );

    // Cada cuerpo tiene la forma { products: [...], total, skip, limit }
    const productos = cuerpos.flatMap((cuerpo) => cuerpo.products);

    return productos;
}
