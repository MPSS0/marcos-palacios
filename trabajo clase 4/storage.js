// js/storage.js
// Módulo responsable de la persistencia de favoritos en localStorage.

const CLAVE_FAVORITOS = "techstore-favoritos";

/**
 * Lee la lista de IDs favoritos guardada en localStorage.
 * Si no hay nada guardado o el JSON está corrupto, retorna un array vacío.
 * @returns {number[]}
 */
export function obtenerFavoritos() {
    try {
        const guardado = localStorage.getItem(CLAVE_FAVORITOS);
        return guardado ? JSON.parse(guardado) : [];
    } catch (error) {
        console.error("No se pudieron leer los favoritos guardados:", error);
        return [];
    }
}

/**
 * Indica si un producto ya está marcado como favorito.
 * @param {number} id
 * @returns {boolean}
 */
export function esProductoFavorito(id) {
    const favoritos = obtenerFavoritos();
    return favoritos.includes(id);
}

/**
 * Agrega o quita un producto de la lista de favoritos y persiste el cambio.
 * @param {number} id
 * @returns {number[]} La lista de favoritos actualizada.
 */
export function alternarFavorito(id) {
    const favoritos = obtenerFavoritos();
    const indice = favoritos.indexOf(id);

    if (indice === -1) {
        favoritos.push(id);
    } else {
        favoritos.splice(indice, 1);
    }

    try {
        localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
    } catch (error) {
        console.error("No se pudo guardar el favorito:", error);
    }

    return favoritos;
}
