// js/app.js
// Orquestador principal: selección del DOM, eventos de la UI e inicialización de la app.

import { descargarProductosTech } from "./api.js";
import { obtenerFavoritos, alternarFavorito } from "./storage.js";
import { crearTarjetaProductoHTML, filtrarProductos, calcularTotalCatalogo } from "./ui.js";

// ------------------------------------------------------------------
// Selección de elementos del DOM
// ------------------------------------------------------------------
const btnTema = document.querySelector("#btn-tema");
const iconoTema = document.querySelector("#icono-tema");
const botonesFiltro = document.querySelectorAll(".btn-filtro");
const inputBuscador = document.querySelector("#input-buscador");

const contenedorCatalogo = document.querySelector("#contenedor-catalogo");
const estadoLoading = document.querySelector("#estado-loading");
const estadoError = document.querySelector("#estado-error");
const btnReintentar = document.querySelector("#btn-reintentar");
const sinResultados = document.querySelector("#sin-resultados");
const metricasCatalogo = document.querySelector("#metricas-catalogo");

const badgeFavoritos = document.querySelector("#badge-favoritos-contador");
const btnFavoritosHeader = document.querySelector("#btn-favoritos-header");

// ------------------------------------------------------------------
// Estado en memoria de la aplicación
// ------------------------------------------------------------------
let catalogoCompleto = [];
let categoriaActual = "todos";

// ------------------------------------------------------------------
// Renderizado
// ------------------------------------------------------------------
function actualizarBadgeFavoritos() {
    const favoritos = obtenerFavoritos();
    badgeFavoritos.textContent = favoritos.length;
}

function renderizarCatalogo() {
    const productosFiltrados = filtrarProductos(catalogoCompleto, {
        texto: inputBuscador.value,
        categoria: categoriaActual
    });

    const hayResultados = productosFiltrados.length > 0;

    contenedorCatalogo.hidden = !hayResultados;
    sinResultados.hidden = hayResultados;

    contenedorCatalogo.innerHTML = productosFiltrados
        .map((producto) => crearTarjetaProductoHTML(producto))
        .join("");

    const total = calcularTotalCatalogo(productosFiltrados);
    metricasCatalogo.textContent = `${productosFiltrados.length} producto(s) · Valor total del catálogo visible: $${total.toFixed(2)}`;
}

// ------------------------------------------------------------------
// Carga de datos desde la API (con manejo de estados de UI)
// ------------------------------------------------------------------
async function cargarCatalogo() {
    estadoLoading.hidden = false;
    estadoError.hidden = true;
    contenedorCatalogo.hidden = true;
    sinResultados.hidden = true;

    try {
        catalogoCompleto = await descargarProductosTech();
        estadoLoading.hidden = true;
        renderizarCatalogo();
    } catch (error) {
        console.error("Error al cargar el catálogo:", error);
        estadoLoading.hidden = true;
        estadoError.hidden = false;
    }
}

// ------------------------------------------------------------------
// Evento: interruptor de modo oscuro
// ------------------------------------------------------------------
btnTema.addEventListener("click", () => {
    const esOscuro = document.body.classList.toggle("dark-mode");
    iconoTema.textContent = esOscuro ? "☀️" : "🌙";
});

// ------------------------------------------------------------------
// Evento: control de filtros por categoría
// ------------------------------------------------------------------
botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((b) => b.classList.remove("activo"));
        boton.classList.add("activo");
        categoriaActual = boton.dataset.categoria;
        renderizarCatalogo();
    });
});

// ------------------------------------------------------------------
// Evento: buscador en tiempo real
// ------------------------------------------------------------------
inputBuscador.addEventListener("input", () => {
    renderizarCatalogo();
});

// ------------------------------------------------------------------
// Evento: reintentar carga tras un error de red
// ------------------------------------------------------------------
btnReintentar.addEventListener("click", () => {
    cargarCatalogo();
});

// ------------------------------------------------------------------
// Evento: acceso rápido a favoritos desde el header
// ------------------------------------------------------------------
btnFavoritosHeader.addEventListener("click", () => {
    const botonFavoritos = document.querySelector('.btn-filtro[data-categoria="favoritos"]');
    botonFavoritos.click();
});

// ------------------------------------------------------------------
// Delegación de eventos: click en el botón de favorito de cada tarjeta
// ------------------------------------------------------------------
contenedorCatalogo.addEventListener("click", (event) => {
    const botonFav = event.target.closest(".btn-fav-card");
    if (!botonFav) return;

    const id = Number(botonFav.dataset.id);
    alternarFavorito(id);
    actualizarBadgeFavoritos();
    renderizarCatalogo();
});

// ------------------------------------------------------------------
// Inicialización de la app
// ------------------------------------------------------------------
actualizarBadgeFavoritos();
cargarCatalogo();
