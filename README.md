# Buscador de Cócteles

El ejercicio consiste en desarrollar una aplicación web que contenga y que nos permita buscar entre un listado de bebidas y cócteles del mundo, seleccionar/eliminar la seleccion de las bebidas favoritas y guardarlas en local storage.

## Especificaciones

## Búsqueda

1. Al hacer clic sobre el botón de buscar, la aplicación debe conectarse al API abierto de TheCocktailDB.
2. Por cada cóctel contenido en el resultado de la búsqueda se pinta una tarjeta donde mostramos una imagen del cóctel y el nombre.
3. Algunos de los cócteles que devuelve el API no tienen imagen. En ese caso hay que mostrar una por defecto.

## Favoritos

Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus cócteles favoritos. Para ello, al hacer clic sobre una cóctel debe pasar lo siguiente:

1. Aparece una selección en el cóctel, indicando que es un cóctel favorito.
2. Hay que mostrar un listado con los cócteles favoritos.
3. El listado de cócteles favoritos debe seguir apareciendo aunque la usuaria realice otra búsqueda.

## Almacenamiento local

Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos debe mostrarse.

## Extras añadidos al proyecto

- [ ] Opción de eliminar los favoritos:

1. Borrar el favorito al hacer clic sobre su icono de eliminar.
2. Se elimina la selección del favorito clicado en la lista de resultados.
3. Borrar de localStorage.

- [ ] Si realizamos una nueva búsqueda y sale un cóctel que ya es favorito, este aparecerá marcado como tal.
- [ ] Añadido botón de borrar todos los favoritos a la vez, así también como en Local storage.
- [ ] Al hacer clic en 'search' sin escribir en el campo, aparece un mensaje de error de texto requerido y al clicar sobre el campo, desaparece.
- [ ] El botón reset elimina lo escrito en el campo y aparecen los resultados por defecto de la búsqueda de Margarita.
- [ ] Maquetacion y diseño de la web.

## Funcionalidades y herramientas utilizadas en el proyecto

Con el fin de trabajar en el proyecto de una forma organizada, se incorporan a las especificaciones del proyecto:

- [ ] Uso de control de versiones con ramas.
- [ ] Uso de una estructura adecuada de ficheros y carpetas Scss, Html y Js.
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
