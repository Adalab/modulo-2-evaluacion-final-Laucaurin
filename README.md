# Buscador de Cóckteles

El ejercicio consiste en desarrollar una aplicación web que contenga y nos permita buscar entre un listado de las bebidas y cócteles del mundo, así como seleccionar/eleminar seleccion de las bebidas como favoritas y guardarlas en local storage.

## Especificaciones

---

## Búsqueda

1. Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de
   TheCocktailDB.
   Algunas de los cócteles que devuelve el API no tienen imagen. En ese caso hay que mostrar una por defecto.
2. Por cada cóctel contenido en el resultado de la búsqueda se pinta una tarjeta donde
   mostramos una imagen del cóctel y el nombre.
3. Algunas de los cócteles que devuelve el API no tienen imagen. En ese caso hay que mostrar una por defecto.

## Favoritos

Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son nuestros cócteles
favoritos. Para ello, al hacer clic sobre una cóctel debe pasar lo siguiente

1. El color de fondo y el de fuente se intercambian, indicando que es un cóctel favorito
2. Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
   con los cócteles favoritos. O
3. Los cócteles favoritos deben seguir apareciendo a la izquierda aunque la usuaria realice otra
   búsqueda

## Almacenamiento local

Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado
de favoritos se debe mostrarse.

## Extras ñadidos al proyecto

- [ ] Opción de eliminar los favoritos:

1. Borarr al hacer clic sobre el icono.
2. Se elimina la selección del favorito clicado en la lista de resultados
3. Borrar de localStorage.

- [ ] Si realizamos una nueva búsqueda y sale un cóctel que ya
      es favorito, este aparecerá marcado como tal.
- [ ] Añadido botón de borrar todos los favoritos a la vez, así también como en Local storage.
- [ ] Al hacer clic en 'seach' sin escribir en el campo, aparece un mensaje de error de texto requerido y al clicar sobre el campo desaparece.
- [ ] El botón reset elimina lo escrito en el campo y aparecen los resultados por defecto de Margarita.
- [ ] Maquetacion y diseño de la web.

## Funcionalidades y herramientas utilizadas en el proyecto

Con el fin de trabajar en el proyecto de una forma organizada, se incorporan a las especificaciones del proyecto:

- [ ] Uso de control de versiones con ramas.
- [ ] Usar una estructura adecuada de ficheros y carpetas Scss, Html y Js.
- [ ] Mixin para botones reutilizables y media queries.
- [ ] Nesting con sintaxis Sass.

## Construido con

**Construido con 🛠️ **

- HTML

- SCSS

- JAVASCRIPT

- BEM structure

**Herramientas**

- VSCODE

- GIT/GITHUB

- GULP

- ADALAB WEB STARTER KIT

## Autor

Laura Caurín
