**Languages / 语言：简体中文 · English · Français · Deutsch · Español · Italiano**

[简体中文](../README.md) | [English](README.en.md) | [Français](README.fr.md) | [Deutsch](README.de.md) | [Español](README.es.md) | [Italiano](README.it.md)

# Folio · 1.4.21

Las herramientas aparecen automáticamente en las notas recién abiertas. La búsqueda conserva el texto y la posición por bloque. Reemplace la coincidencia actual o todas las del bloque de código mediante transacciones nativas del editor que permiten deshacer. La búsqueda es literal y no distingue mayúsculas de minúsculas.

Arrastre el panel por la barra de título y siga usando la página para observar los cambios mientras activa o desactiva opciones.

El botón de deslizadores de la barra superior abre todos los ajustes de Folio. El primer ajuste en ambas vistas controla su visibilidad. El chat de IA nativo permanece en la barra lateral derecha y se abre desde la barra superior; el icono de búsqueda del Desk nativo queda separado del borde.

Folio da a Roam un diseño cálido inspirado en las revistas, con herramientas para etiquetas, notas al margen, calendario, lectura y tareas. Active cada componente por separado para escribir con más claridad y leer con mayor atención.

**Más plugins independientes**

- **Reading Desk** — Reúna lecturas, anotaciones e ideas para convertir lo que lee en conocimiento que perdura.
- **Version Studio** — Compare versiones de sus notas, siga la evolución de sus ideas y reescriba con confianza.

Estos plugins se descargan e instalan por separado; no están incluidos en Folio.

## Instalación

1. Desactiva los antiguos `roam/css` del tema y los `roam/js` relacionados para evitar duplicados.
2. Descomprime el ZIP.
3. Abre Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Selecciona la carpeta que contiene directamente `extension.js`.
5. Elige idioma y opciones en Extension Settings → Folio. Auto sigue el idioma del navegador.

## Tema y componentes

Un interruptor controla el tema; los componentes activos conservan los colores nativos al desactivarlo. Los 29 componentes se organizan en siete grupos funcionales con navegación a la izquierda. Cada uno conserva su interruptor y nivel estimado de recursos. Apariencia, nombres de etiquetas, altura del código y atajos siguen en sus secciones correspondientes. Los niveles no miden la CPU en tiempo real.

- Interfaz y navegación: Mantener visibles los controles laterales, Ocultar iconos superiores, Ocultar elementos de la barra izquierda, Compatibilidad de menús Workbench, Mostrar la barra solo al desplazarse, Botón de grafo de página, Tarjetas de la barra derecha.
- Etiquetas y contenido: Etiquetas y sellos especiales, Selector OR, Ficha de propiedades, Peso visual por referencias.
- Escritura y código: Modo máquina de escribir y objetivo, Notas al margen, Limitar la altura del código, Herramientas de bloques de código.
- Diario y calendario: Cabecera de nota diaria, Acciones rápidas del calendario, Navegación del calendario por teclado, Plantillas diarias automáticas, Mapa de calor y vista previa del calendario, Trasladar TODO de ayer, Captura rápida del calendario.
- Lectura y medios: Imágenes y pies, Ventana PDF, Lector de vídeo.
- Análisis de páginas: Estadísticas de página, Pulso de página.
- Tareas y revisión: Mesa editorial, 3 tareas aleatorias.

Las instalaciones nuevas activan tema y componentes. Desactivar un componente libera sus recursos. La desactivación temporal de Folio permite compararlo con Roam nativo.

## Random TODO 3 · Exclusiones

En Tareas y revisión, las páginas excluidas inicialmente son `SmartBlock` y `roam/templates`. Introduzca un título exacto por línea; puede modificar o añadir entradas. Se filtra la página que contiene la tarea, incluidos sus bloques hijos anidados. Una simple referencia a esa página no excluye la tarea.

La exclusión de TODO con fechas futuras está activada por defecto. Desactívela para incluir tareas cuyo texto enlace explícitamente una fecha futura de nota diaria. Los cambios son inmediatos y se guardan, incluso con una lista vacía o la opción desactivada. Restablecer recupera las dos páginas y activa la opción. No se modifican las tareas originales.

## Fuentes, lema y etiquetas

Introduce el `font-family` CSS de una fuente instalada, no un archivo ni una URL; dejarlo vacío restaura los valores predeterminados. El lema admite dos líneas con un presupuesto de 24 por línea: carácter latino = 1; carácter chino, de ancho completo o emoji = 2. El ancho disponible puede reducir más el límite.

Los nombres de etiquetas son configurables; cambiar el idioma no renombra páginas de Roam. Los tipos de notas y Reading List usan los mismos **12px** en `[[enlaces de página]]` y `#etiquetas`, como los sellos Q1, sin aumentar con el cuerpo del texto. Personas y sectores sí siguen el tamaño del texto. Libros, personas, sectores, motive y rediscover conservan los clics nativos.

## Comportamiento

- Open en la barra de vídeo abre el bloque de vídeo en la barra derecha. Timestamp, Theater y Notes mantienen sus controladores. El código proporcionado también incluye edición y eliminación de notas con marca temporal en modo cine.
- Añade `#.aside` o `#.aside-left` a un bloque hijo, o usa el menú contextual de su viñeta. Si falta espacio, la nota permanece en el texto. La proyección de comentarios está desactivada.
- El PDF a pantalla completa ofrece enlace de salida y Esc. Altura del código: 420px por defecto; 0 elimina el límite. Su interruptor es independiente.
- Query/Data Table conserva el ajuste nativo de columnas. Roam controla el espaciado de los menús de bloques y listas de comandos.
- El artículo usa una sola capa de centrado y un separador de bloque de 8px; conserva los contadores de referencias. La barra izquierda nativa mide 232px; Folio no añade redimensionamiento para ella.
- Atajos iniciales: G para saltar a una fecha, T para hoy, D para notas diarias y flechas izquierda/derecha para días vecinos. Son configurables y no actúan al escribir.
- Random TODO 3 excluye por defecto fechas diarias futuras explícitas (opcional) y evita enlaces de origen duplicados. Se eliminaron el envejecimiento del papel, mark it y sus ajustes.

El icono del calendario y Alt-clic en una referencia de fecha comparten el mismo diseño mejorado. La selección de la fecha referenciada conserva el comportamiento nativo de Roam. Las vistas previas desaparecen al sacar el puntero de la fecha, cerrar el calendario o perder el foco de la ventana.

## Desarrollo y validación

Ejecuta `npm run build` y `npm run check`. Las pruebas opcionales `npm run check:layout` y `npm run check:interaction` requieren Playwright/Chromium; `FOLIO_TEST_CHROMIUM` indica el ejecutable y `FOLIO_DOM_FIXTURE` un DOM exportado. `extension.js` es el archivo distribuible; las fuentes están en `src/` y `source/`.

Consulta [TEST-REPORT.md](../TEST-REPORT.md) y [CHANGELOG.md](../CHANGELOG.md). Las pruebas locales y dobles de API no sustituyen la validación completa en un grafo con sesión iniciada.

## Agradecimientos y licencia

Gracias a **ESTHER不二 / esthersjw** y [esther-design-system](https://github.com/esthersjw/esther-design-system), base del diseño visual y del tema adaptado de Folio. El original y el tema adaptado siguen **CC BY-NC-SA 4.0**; consulta [LICENSE.md](../LICENSE.md).

Gracias a **Date Picker Enhance**, citado expresamente por el código original del calendario, y a Roam Research y su comunidad por las funciones nativas, interfaces e ideas de interacción. No se atribuyen por suposición autores o direcciones de proyectos sin confirmar.
