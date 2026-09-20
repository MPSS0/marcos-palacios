# 📝 Devolución Docente - Clase 04 (Proyecto Integrador TechStore Móvil)

**Alumno:** PALACIOS, Marcos Salvador  
**Curso:** 7º 5ta • Desarrollo de Software para Plataformas Móviles  
**Profesor:** Axel Castellano Gutiérrez  
**Fecha de Revisión:** 15 de Septiembre de 2026  
 

---

## 🎯 Resumen Ejecutivo

Trabajo excepcional. Marcos fue más allá de la plantilla básica incorporando **documentación JSDoc**, desacoplamiento de URLs y constantes (`BASE_URL`, `CATEGORIAS_TECH`), manejo de stock nulo (`Sin stock`), accesibilidad dinámicos en `aria-label` y destructuración avanzada con valores por defecto `{ texto = "", categoria = "todos" }`.

---

## 📊 Desglose de Evaluación por Módulo

### 1. 📁 `js/api.js` — Consumo Asíncrono (10 / 10)
- ✅ Constantes descriptivas `BASE_URL` y `CATEGORIAS_TECH`.
- ✅ Uso de `Promise.all()` con `AbortSignal.timeout(8000)`.
- ✅ Mensajes de error HTTP descriptivos con `respuesta.status` y `respuesta.statusText`.
- ✅ Retorno aplanado con `.flatMap()`.

### 2. 📁 `js/storage.js` — Persistencia Local (10 / 10)
- ✅ Bloques `try/catch` tanto en lectura (`getItem`) como en escritura (`setItem`).
- ✅ Mutación con `.indexOf()` y `.splice()`.

### 3. 📁 `js/ui.js` — Renderizado y Filtros (10 / 10)
- ✅ JSDoc completo en todas las funciones.
- ✅ Manejo visual de badge sin stock (`sinStock ? "Sin stock" : ...`).
- ✅ Formateo de categorías con `.replace("-", " ")`.
- ✅ Destructuración de opciones en `filtrarProductos(productos, { texto, categoria })`.

### 4. 📁 `js/app.js` — Orquestación Principal y Eventos (10 / 10)
- ✅ Arquitectura limpia sin variables globales innecesarias.
- ✅ Delegación de eventos en el catálogo con `closest()`.
- ✅ Conmutación de Modo Oscuro.

---

**Conclusión:** Entrega impecable (10/10). Calidad de código profesional.
