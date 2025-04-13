  El repositorio incluye el programa con el menú de opciones para la libreria "El Rincón del Saber" que permiten que la librería lleve un control de los libros, a continuación se detalla cómo se logró cada parte del menú:
* Agregar libro:
Usamos un switch para manejar la opción seleccionada en el menú.
Se pidió al usuario ingresar los datos del libro usando readline-sync, y los datos se almacenaron en un objeto datosLibro.
Este objeto se agregó al arreglo catalogo con el método push().
Luego, se guardó el catálogo actualizado en el archivo catalogo.json usando fs.writeFileSync().

* Mostrar catálogo:
Usamos forEach() para recorrer el arreglo catalogo y mostrar los detalles de cada libro.
Si el catálogo está vacío (es decir, si catalogo.length === 0), se muestra un mensaje de error.

* Buscar libro por título:
Se pidió al usuario el título del libro a buscar usando readline-sync.
Usamos find() para buscar el libro en el arreglo catalogo. Si el libro se encuentra, se muestran sus detalles; si no se encuentra, se muestra un mensaje de error.

* Eliminar libro:
Se pidió al usuario el título del libro a eliminar.
Usamos findIndex() para obtener el índice del libro en el arreglo catalogo.
Si se encuentra el libro, se eliminó del arreglo usando splice() y luego se actualizó el archivo catalogo.json con el catálogo actualizado.

* Ver estadísticas:
Usamos reduce() para calcular:
El precio total de todos los libros (para obtener el precio promedio).
El libro más antiguo (comparando los años de publicación).
El libro más caro (comparando los precios).
Luego, mostramos las estadísticas como el número total de libros, el precio promedio, el libro más caro y el más antiguo.

* Ordenar libros:
Usamos sort() para ordenar los libros de acuerdo a la opción seleccionada por el usuario (por precio o por año de publicación).
Dependiendo de la opción seleccionada (precio de menor a mayor, de mayor a menor, año más antiguo o más reciente), sort() organiza el arreglo catalogo.
Después de ordenar, el catálogo se guarda en catalogo.json para mantener el nuevo orden.

* Editar libro:
El usuario selecciona el título del libro que desea editar.
Usamos find() para buscar el libro en el catálogo.
Si el libro se encuentra, el programa muestra los detalles y luego solicita qué parte editar (título, autor, precio o año de publicación).
Según la opción seleccionada, el programa actualiza la información del libro.
Finalmente, se guarda el catálogo actualizado en catalogo.json.

* Salir:
El programa termina cuando el usuario selecciona la opción de salir. El ciclo do...while sigue ejecutándose hasta que el usuario selecciona la opción 8.
Al elegir "Salir", el programa imprime un mensaje de despedida y termina el ciclo.


