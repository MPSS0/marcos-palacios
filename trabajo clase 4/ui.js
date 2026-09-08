// js/ui.js
// Módulo responsable de transformar datos en HTML y aplicar lógica declarativa (HOFs).

import { esProductoFavorito } from "./storage.js";

/**
 * Genera el HTML de una tarjeta de producto a partir del objeto recibido de la API.
 * @param {Object} producto
 * @returns {string} HTML de la tarjeta.
 */
export function crearTarjetaProductoHTML(producto) {
    const { id, title, price, category, thumbnail, stock } = producto;

    const esFavorito = esProductoFavorito(id);
    const sinStock = stock === 0;

    return `
        <article class="tarjeta-producto" data-id="${id}">
            <div class="tarjeta-imagen">
                <img src="${thumbnail}" alt="${title}" loading="lazy" />
                <button
                    class="btn-fav-card ${esFavorito ? "es-favorito" : ""}"
                    type="button"
                    data-id="${id}"
                    aria-label="${esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}"
                >
                    ${esFavorito ? "★" : "☆"}
                </button>
            </div>
            <div class="tarjeta-info">
                <span class="tarjeta-categoria">${category.replace("-", " ")}</span>
                <h3 class="tarjeta-titulo">${title}</h3>
                <div class="tarjeta-footer">
                    <span class="tarjeta-precio">$${price}</span>
                    <span class="tarjeta-stock ${sinStock ? "agotado" : ""}">
                        ${sinStock ? "Sin stock" : `${stock} disp.`}
                    </span>
                </div>
            </div>
        </article>
    `;
}

/**
 * Filtra un array de productos por texto de búsqueda y por categoría
 * (o por favoritos, si la categoría recibida es "favoritos").
 * @param {Array} productos
 * @param {{texto?: string, categoria?: string}} opciones
 * @returns {Array} Productos filtrados.
 */
export function filtrarProductos(productos, { texto = "", categoria = "todos" } = {}) {
    const textoNormalizado = texto.trim().toLowerCase();

    return productos.filter((producto) => {
        const coincideTexto = producto.title.toLowerCase().includes(textoNormalizado);

        let coincideCategoria = true;

        if (categoria === "favoritos") {
            coincideCategoria = esProductoFavorito(producto.id);
        } else if (categoria !== "todos") {
            coincideCategoria = producto.category === categoria;
        }

        return coincideTexto && coincideCategoria;
    });
}

/**
 * Calcula la suma total de precios de un array de productos visibles.
 * @param {Array} productos
 * @returns {number}
 */
export function calcularTotalCatalogo(productos) {
    return productos.reduce((total, producto) => total + producto.price, 0);
}
