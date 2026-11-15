# Folio · 1.4.25

[简体中文 · English · Français · Deutsch · Español · Italiano](../README.md#languages)

<a id="es"></a>


## Español

[Presentación](#es-overview) · [Barra derecha](#es-sidebar) · [Notas marginales](#es-asides) · [Notas de vídeo](#es-video) · [Ventana de ajustes](#es-settings) · [Instalación](#es-install) · [Apariencia y fuentes](#es-appearance) · [Interfaz y navegación](#es-navigation) · [Etiquetas y contenido](#es-content) · [Escritura y código](#es-writing) · [Diario y calendario](#es-calendar) · [Lectura y medios](#es-media) · [Análisis de páginas](#es-insights) · [Tareas y revisión](#es-review) · [Desarrollo](#es-development) · [Créditos](#es-credits)

<a id="es-overview"></a>

### Presentación

**Páginas con estilo de revista para Roam y herramientas cotidianas que puedes usar por separado.**

Colores de papel cálidos, títulos claros y márgenes cómodos invitan a leer y escribir durante más tiempo. Folio también armoniza el diario, las barras laterales, las etiquetas, las propiedades y algunas extensiones de la comunidad, además de la IA nativa de Roam y The Desk.

**Más plugins independientes**

- **Reading Desk** — Reúna lecturas, anotaciones e ideas para convertir lo que lee en conocimiento que perdura.
- **Version Studio** — Compare versiones de sus notas, siga la evolución de sus ideas y reescriba con confianza.

Estos plugins se descargan e instalan por separado; no están incluidos en Folio.

Un interruptor controla el tema; los componentes activos conservan los colores nativos al desactivarlo. Los 29 componentes se organizan en siete grupos funcionales con navegación a la izquierda. Cada uno conserva su interruptor y nivel estimado de recursos. Apariencia, nombres de etiquetas, altura del código y atajos siguen en sus secciones correspondientes. Los niveles no miden la CPU en tiempo real.

Las instalaciones nuevas activan tema y componentes. Desactivar un componente libera sus recursos. La desactivación temporal de Folio permite compararlo con Roam nativo.

<a id="es-sidebar"></a>

### Convierte la barra derecha en un espacio de trabajo

Las notas de la barra derecha se organizan en tarjetas que puedes recorrer horizontalmente mientras mantienes visible la página principal. Cada tarjeta conserva su desplazamiento y los controles nativos para abrir, plegar y cerrar contenido.

La entrada a la IA nativa está en la barra superior principal; el chat permanece en una tarjeta a la derecha, con historial, conversaciones y creación de chats. Las tarjetas de notas habituales conservan su funcionamiento.

<a id="es-asides"></a>

### Dale un lugar a las ideas complementarias

Coloca bloques hijos seleccionados en el margen izquierdo o derecho para mantener ejemplos y aclaraciones junto al argumento. Elige **Aside: Left** o **Aside: Right** en el menú de la viñeta, o añade `#.aside-left` o `#.aside`. Los demás hijos conservan el esquema; si falta espacio, las notas vuelven al texto.

La posición sigue el ancho nativo de Roam y el espacio disponible. Las anotaciones de Reading Desk son independientes; usa un solo método por bloque padre para evitar solapamientos.

<a id="es-video"></a>

### Mira vídeos y conserva tus ideas al lado

El modo Theater reúne el vídeo y los comentarios nativos con marcas de tiempo en la página principal. **Timestamp** usa la creación de comentarios nativa de Roam. Folio muestra esos comentarios bajo el vídeo y localiza la nueva entrada. Pulsa la marca para volver al momento; las ediciones se guardan en el mismo comentario. **Open** abre el bloque original a la derecha.

Las ventanas más bajas y estrechas limitan la altura del vídeo para dejar espacio a las notas. Las grandes conservan márgenes laterales, con vídeo y notas alineados.

<a id="es-settings"></a>

### Ventana de ajustes

El botón de deslizadores de la barra superior abre una ventana compacta de ajustes. Arrástrala por el título mientras sigues usando la página. Tanto allí como en los ajustes completos puedes ocultar o recuperar el botón, visible por defecto. Los 29 componentes se distribuyen en siete grupos, más apariencia; tema y componentes tienen controles independientes. Los niveles de recursos son estimaciones.

<a id="es-install"></a>

### Instalación

1. Desactiva los antiguos `roam/css` del tema y los `roam/js` relacionados para evitar duplicados.
2. Descomprime el ZIP.
3. Abre Settings → Roam Depot → Developer Mode → Load unpacked extension.
4. Selecciona la carpeta que contiene directamente `extension.js`.
5. Elige idioma y opciones en Extension Settings → Folio. Auto sigue el idioma del navegador.

<a id="es-appearance"></a>

### Apariencia y fuentes

Introduce el `font-family` CSS de una fuente instalada, no un archivo ni una URL; vacío restaura los valores predeterminados. Puedes configurar por separado texto y títulos/notas marginales. El lema admite dos líneas de 24 unidades: carácter latino = 1; carácter chino, de ancho completo o emoji = 2.

<a id="es-navigation"></a>

### Interfaz y navegación

| Componente | Consumo de recursos |
| --- | --- |
| Mantener visibles los controles laterales | Muy bajo |
| Ocultar iconos superiores | Muy bajo |
| Ocultar elementos de la barra izquierda | Muy bajo |
| Compatibilidad de menús Workbench | Muy bajo |
| Mostrar la barra solo al desplazarse | Muy bajo |
| Botón de grafo de página | Bajo |
| Tarjetas de la barra derecha | Bajo |

Se conservan el espaciado nativo de los menús, el ajuste de columnas Query/Data Table y las interacciones de los enlaces de Roam.

La función nativa «Adjust width of the main page» de Roam controla el ancho del texto. Folio no añade niveles ni fija el ancho del artículo. Las columnas de Query/Data Table y los enlaces siguen siendo nativos.

<a id="es-content"></a>

### Etiquetas y contenido

| Componente | Consumo de recursos |
| --- | --- |
| Etiquetas y sellos especiales | Muy bajo |
| Selector OR | Muy bajo |
| Ficha de propiedades | Bajo |
| Peso visual por referencias | Moderado |

Los nombres de etiquetas son configurables; cambiar el idioma no renombra páginas de Roam. Los tipos de notas y Reading List usan los mismos **12px** en `[[enlaces de página]]` y `#etiquetas`, como los sellos Q1, sin aumentar con el cuerpo del texto. Personas y sectores sí siguen el tamaño del texto. Libros, personas, sectores, motive y rediscover conservan los clics nativos.

Las fichas de propiedades reúnen la información de la página. El peso visual ajusta tamaño y énfasis según las referencias del bloque, conservando contadores y navegación nativos.

<a id="es-writing"></a>

### Escritura y código

| Componente | Consumo de recursos |
| --- | --- |
| Modo máquina de escribir y objetivo | Muy bajo |
| Notas al margen | Bajo |
| Limitar la altura del código | Muy bajo |
| Herramientas de bloques de código | Más alto |

El modo máquina de escribir mantiene visible la posición actual y ofrece un objetivo de escritura. Las notas marginales se colocan por bloque hijo, como se explica arriba.

La altura del código está limitada a **420px** por defecto; `0` elimina el límite. El código largo se desplaza dentro del bloque, cuyo contenedor se adapta al espacio. Las herramientas aparecen al desplegar notas nuevas: inicio/final, copia, búsqueda, reemplazo actual y de todas las coincidencias del bloque. La búsqueda es literal y no distingue mayúsculas; conserva consulta y posición al salir o reabrir. Los reemplazos usan transacciones nativas del editor y se pueden deshacer.

<a id="es-calendar"></a>

### Diario y calendario

| Componente | Consumo de recursos |
| --- | --- |
| Cabecera de nota diaria | Muy bajo |
| Acciones rápidas del calendario | Muy bajo |
| Navegación del calendario por teclado | Muy bajo |
| Plantillas diarias automáticas | Muy bajo |
| Mapa de calor y vista previa del calendario | Moderado |
| Trasladar TODO de ayer | Moderado |
| Captura rápida del calendario | Más alto |

Atajos iniciales: G para saltar a una fecha, T para hoy, D para notas diarias y flechas izquierda/derecha para días vecinos. Son configurables y no actúan al escribir.

El icono del calendario y Alt-clic en una referencia de fecha comparten el mismo diseño mejorado. La selección de la fecha referenciada conserva el comportamiento nativo de Roam. Las vistas previas desaparecen al sacar el puntero de la fecha, cerrar el calendario o perder el foco de la ventana.

La cabecera diaria oculta la línea nativa duplicada de encima; desactivarla restaura la línea, también en fechas cargadas al desplazarse. La captura rápida añade notas, TODOs o un plan a la fecha elegida.

**Plantillas**: introduce un UID de bloque o `((una referencia))` para SmartBlock entre semana, de fin de semana y plan de hoy. Los tres campos están vacíos por defecto. Los modelos automáticos requieren SmartBlocks; configúralos antes de activarlos. Se ejecutan al iniciar el componente si existe la página de hoy, como máximo una vez al día por plantilla configurada.

El plan copia los bloques hijos y su jerarquía, sin ejecutar comandos SmartBlocks. Cada plantilla se copia como máximo una vez por fecha, incluso tras recargar. Una plantilla inexistente o vacía no anuncia éxito. Si se interrumpe, revisa el contenido parcial antes de completarlo manualmente.

<a id="es-media"></a>

### Lectura y medios

| Componente | Consumo de recursos |
| --- | --- |
| Imágenes y pies | Bajo |
| Ventana PDF | Bajo |
| Lector de vídeo | Más alto |

**Open** abre el bloque de vídeo a la derecha; **Theater** activa el modo cine y **Notes** controla la vista nativa de marcas. Roam gestiona la creación mediante **Timestamp** y guarda la nota como comentario nativo. Folio no crea otro bloque hijo del vídeo. La edición en Theater actualiza el mismo comentario. Los cambios se guardan automáticamente tras una breve pausa al escribir; salir del campo, Ctrl/Cmd＋Intro o **Guardar** inicia el guardado de inmediato. Los borradores se conservan al actualizar la lista y las escrituras de cada comentario se realizan en orden. Solo se indica el éxito tras volver a leer el texto guardado en el grafo. Si falla, se conserva el borrador con la acción **Reintentar**. Eliminar requiere un segundo clic.

Las imágenes y los pies comparten el estilo de lectura. La vista PDF ampliada ofrece un enlace de salida y Esc.

<a id="es-insights"></a>

### Análisis de páginas

| Componente | Consumo de recursos |
| --- | --- |
| Estadísticas de página | Moderado |
| Pulso de página | Más alto |

La fila de estadísticas muestra palabras, tiempo de lectura estimado y otros datos. El pulso de la página muestra menciones recientes. Ambos componentes se pueden activar por separado.

<a id="es-review"></a>

### Tareas y revisión

| Componente | Consumo de recursos |
| --- | --- |
| Mesa editorial | Más alto |
| 3 tareas aleatorias | Más alto |

**Editorial Desk** amplía The Desk nativo de Roam con filtros por tipo, varias tarjetas fijadas, selección/retirada de una noticia principal y nueve órdenes: manual, edición reciente, edición más antigua, fecha límite, progreso, tipo, longitud, actividad y mayor antigüedad en Desk. Controles, ayudas y estadísticas siguen los seis idiomas de Folio; títulos y tipos propios no cambian. Es distinto del plugin Reading Desk.

#### Random TODO 3 · Exclusiones

Random TODO 3 selecciona de forma ponderada tres TODOs que aún no aparecen en la nota diaria de hoy, para redescubrir tareas pendientes.

En Tareas y revisión, las páginas excluidas inicialmente son `SmartBlock` y `roam/templates`. Introduzca un título exacto por línea; puede modificar o añadir entradas. Se filtra la página que contiene la tarea, incluidos sus bloques hijos anidados. Una simple referencia a esa página no excluye la tarea.

La exclusión de TODO con fechas futuras está activada por defecto. Desactívela para incluir tareas cuyo texto enlace explícitamente una fecha futura de nota diaria. Los cambios son inmediatos y se guardan, incluso con una lista vacía o la opción desactivada. Restablecer recupera las dos páginas y activa la opción. No se modifican las tareas originales.

<a id="es-development"></a>

### Desarrollo y validación

Ejecuta `npm run build` y `npm run check`. Las pruebas opcionales `npm run check:layout` y `npm run check:interaction` requieren Playwright/Chromium; `FOLIO_TEST_CHROMIUM` indica el ejecutable y `FOLIO_DOM_FIXTURE` un DOM exportado. `extension.js` es el archivo distribuible; las fuentes están en `src/` y `source/`.

Historial en [CHANGELOG.md](../CHANGELOG.md). Las comprobaciones locales del DOM y con dobles de API no garantizan toda interacción en grafos reales o en todos los dispositivos.

<a id="es-credits"></a>

### Agradecimientos y licencia

Gracias a **ESTHER不二 / esthersjw** y [esther-design-system](https://github.com/esthersjw/esther-design-system), base del diseño visual y del tema adaptado de Folio. El original y el tema adaptado siguen **CC BY-NC-SA 4.0**; consulta [LICENSE.md](../LICENSE.md).

Gracias a **Date Picker Enhance**, citado expresamente por el código original del calendario, y a Roam Research y su comunidad por las funciones nativas, interfaces e ideas de interacción. No se atribuyen por suposición autores o direcciones de proyectos sin confirmar.

Gracias a **Azlen Elza** y al [tema Zenith](https://github.com/azlen/roam-themes#zenith), cuyas páginas en paralelo y diseño de lectura concentrada inspiraron Folio.

[Volver a los idiomas](../README.md#languages)
