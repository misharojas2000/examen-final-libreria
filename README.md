  El repositorio incluye el programa con el menú de opciones para la libreria "El Rincón del Saber" que permiten que la librería lleve un control de los libros, cada opción del menú se explica a continuación:
1. Agregar libro: Le pide al usuario que agregue un libro nuevo con todas sus especificaciones, luego de agregarlo, se agrega a la carpeta catalogo.json, para que más adelante podamos acceder a todos los libros ingresados.
2. Mostrar catalogo: Le muestra al usuario todos los libros que se han ingresado en la opción 1 del menú principal, en orden conforme se van agregando, o en el orden seleccionado en la opción 6 del menú principal.
3. Buscar libro por titulo: Le pide al usuario el título del libro que desee verificar, y si el libro existe, muestra las especificaciones del libro.
4. Eliminar libro: Le pide al usuario que ingrese el título del libro que se desee eliminar, luego lo elimina.
5. Ver estadisticas: Muestra al usuario un resumen, tomando en cuenta todos los libros que han sido ingresados en la opción 1 del menú principal. 
6. Ordenar libros: Le da opciones al usuario para ordenar los libros, y, según la opción seleccionada, los ordena en la carpeta catalogo.json, de igual manera al momento de usar la opción 2 del menú principal, muestra el catálogo en el nuevo orden.
7. Editar libro: Le pide al usuario el título del libro que desea modificar y le pregunta que parte del libro quiere modificar, de igual manera, guarda los cambios en la carpeta catalogo.json, y lo muestra en la opción 2 del menú principal.
8. Salir: Sale del programa

   *** A continuación se detalla cómo se logró cada parte del menú: ***
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


