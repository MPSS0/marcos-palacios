# TechStore Móvil — Proyecto Integrador (Clase 04)

Aplicación móvil de catálogo de productos tecnológicos que consume la API pública [DummyJSON](https://dummyjson.com/), con búsqueda, filtros, modo oscuro y favoritos persistentes. Construida con **ES Modules** puros (sin frameworks ni librerías externas de JS).

## Cómo correrlo
1. Abrir esta carpeta (`proyecto-integrador/`) en VS Code.
2. Iniciar `index.html` con la extensión **Live Server** (necesario porque los módulos ES6 requieren protocolo `http://`, no `file://`).
3. La app descarga el catálogo automáticamente al cargar la página.

## Estructura y explicación de cada archivo

### `index.html`
Maqueta la estructura semántica de la app: el encabezado sticky (logo, botón de favoritos con badge, botón de tema), el buscador, la barra de filtros por categoría, y el `<main>` con los tres posibles estados del catálogo (`#estado-loading`, `#estado-error` y `#contenedor-catalogo`). Carga los estilos y arranca el único punto de entrada de JS con `<script type="module" src="./js/app.js">`.

### `styles.css`
Define el sistema visual de la app mediante **variables CSS** (`:root`), reescritas dentro de `body.dark-mode` para soportar el modo oscuro sin duplicar reglas. Incluye:
- Paleta tech (azul índigo como color primario, verde azulado para stock disponible, ámbar para favoritos).
- Tipografía `Space Grotesk` (títulos/precios) + `Inter` (texto general).
- Estilos responsivos para las tarjetas de producto (grilla de 2 columnas, 1 columna en pantallas muy chicas).
- Estados visuales: spinner de carga, mensaje de error con botón de reintento, y mensaje de "sin resultados".

### `js/api.js` — Capa de red
Módulo que se comunica con DummyJSON. La función `descargarProductosTech()`:
- Dispara 3 `fetch` en paralelo (uno por categoría: `smartphones`, `laptops`, `mobile-accessories`) usando `Promise.all()`.
- Aplica un timeout de seguridad de 8 segundos con `AbortSignal.timeout(8000)` para que la app no quede "colgada" si la red falla.
- Valida que cada respuesta tenga `res.ok === true`; si no, lanza un error que después captura `app.js`.
- Une los productos de las 3 categorías en un único array plano con `.flatMap()`.

### `js/storage.js` — Capa de persistencia
Módulo aislado que maneja `localStorage` para que ningún otro archivo acceda al storage directamente:
- `obtenerFavoritos()`: lee y parsea el JSON guardado; si no existe o está corrupto, devuelve `[]` (con `try/catch`).
- `esProductoFavorito(id)`: devuelve `true`/`false` según si el ID está en la lista.
- `alternarFavorito(id)`: agrega o quita el ID de la lista y la vuelve a guardar con `JSON.stringify`.

### `js/ui.js` — Capa de transformación de datos
Funciones puras y declarativas (Higher-Order Functions) que no tocan el DOM real, solo generan strings o datos derivados:
- `crearTarjetaProductoHTML(producto)`: usa **destructuring** para extraer `{ id, title, price, category, thumbnail, stock }` y arma el HTML de la tarjeta, marcando la estrella como favorita si corresponde.
- `filtrarProductos(productos, opciones)`: combina con `.filter()` el texto del buscador (`.includes()`) y la categoría seleccionada (incluyendo el caso especial `"favoritos"`).
- `calcularTotalCatalogo(productos)`: usa `.reduce()` para sumar el precio de todos los productos visibles.

### `js/app.js` — Orquestador
El único módulo que interactúa con el DOM real y coordina a todos los demás:
- Selecciona todos los elementos de la interfaz con `querySelector`/`querySelectorAll`.
- Maneja el interruptor de modo oscuro (`classList.toggle("dark-mode")`) y el cambio de ícono ☀️/🌙.
- Escucha clicks en los botones de filtro y el evento `input` del buscador para re-renderizar el catálogo en tiempo real.
- Llama a `descargarProductosTech()` al iniciar y maneja los 3 estados de UI (cargando / error con reintento / catálogo visible).
- Usa **delegación de eventos** en `#contenedor-catalogo`: un solo listener detecta clicks en cualquier `.btn-fav-card` (aunque las tarjetas se generen dinámicamente después) con `event.target.closest()`.
- Actualiza el badge de favoritos del header cada vez que cambia el estado.

## Criterios de evaluación cubiertos
- [x] Arquitectura modular con `import`/`export` entre los 4 archivos JS.
- [x] Modo oscuro funcional y persistente durante la sesión.
- [x] Búsqueda y filtros con `.filter()` y `.reduce()`.
- [x] Catálogo descargado desde la API con estados de loading y error (+ reintento).
- [x] Favoritos persistidos en `localStorage` (sobreviven a `F5`).
