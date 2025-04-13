const readline = require('readline-sync')
const colors = require('colors')
const fs = require('fs')
let opcionMenu
let catalogo = []
//Agregar los libros del archivo catalogo.json
if (fs.existsSync('catalogo.json')) {
    const data = fs.readFileSync('catalogo.json', 'utf8');
    catalogo = JSON.parse(data);
}

do {
    opcionMenu = readline.question(`Menu "El Rincon del Saber":
        1. Agregar libro
        2. Mostrar catalogo
        3. Buscar libro por titulo
        4. Eliminar libro
        5. Ver estadisticas
        6. Ordenar libros
        7. Editar libro
        8. Salir 
        `.cyan)

switch(opcionMenu){
    case `1`:
        let titulo = readline.question(`Por favor ingrese el titulo del libro:   `.gray).toLowerCase()
        let autor = readline.question(`Por favor ingrese el autor del libro:   `.gray).toLowerCase()
        let precio = parseFloat(readline.question(`Por favor ingrese el precio del libro:   `.gray))
        let anioDePublicacion = parseInt(readline.question(`Por favor ingrese el anio de publicacion del libro:   `.gray))

        let datosLibro = {
            titulo: titulo,
            autor: autor,
            precio: precio,
            anioDePublicacion: anioDePublicacion
        }
            catalogo.push(datosLibro)
            fs.writeFileSync('catalogo.json', JSON.stringify(catalogo, null, 2))  // Guardar el catálogo actualizado en un archivo JSON
            console.log(`Libro: ${titulo} agregado exitosamente`.green)
    break
    case `2`:
        if(catalogo.length === 0){
        console.log(`Aún no hay libros agregados al catálogo`.red)
        } else {
        console.log(`Catálogo de libros:
        `.blue)
        catalogo.forEach((libro, i) => {
        console.log(`Libro: ${i + 1}
        Título: ${libro.titulo}
        Autor: ${libro.autor}
        Precio: Q${libro.precio}
        Año de publicación: ${libro.anioDePublicacion}
        `.blue)
        })
        }
    break
    case `3`:
        let busquedaLibro = readline.question(`Que libro desea verificar?
            `.gray).toLowerCase()
        let libroEncontrado = catalogo.find(libro => libro.titulo === busquedaLibro)
        if(libroEncontrado){
            console.log(`Aquí tienes los datos del libro ${busquedaLibro}: `.green)
            console.log(`
                Título: ${libroEncontrado.titulo}
                Autor: ${libroEncontrado.autor}
                Precio: Q${libroEncontrado.precio}
                Año de publicación: ${libroEncontrado.anioDePublicacion}
                `.blue)
        } else {
            console.log(`Libro no encontrado`.red)
        }
    break
    case `4`:
        if(catalogo.length === 0){
            console.log(`Aún no hay libros agregados al catálogo`.red)
        } 
        let eliminarLibro = readline.question(`Ingrese el titulo del libro que desea eliminar: `.gray).toLowerCase()
        let i = catalogo.findIndex(libro => libro.titulo === eliminarLibro)
        if(i !== -1){
            catalogo.splice(i, 1)
            // Actualizar el archivo catalogo.json con el catálogo actualizado
            fs.writeFileSync('catalogo.json', JSON.stringify(catalogo, null, 2))
            console.log(`Libro ${eliminarLibro} eliminado`.green)
        }
    break
    case `5`:
        if (catalogo.length === 0){
        console.log(`Aún no hay libros agregados al catálogo`.red)
    } else {
        // cantidad de libros
        const cantidadLibros = catalogo.length
        // promedio
        const precioTotal = catalogo.reduce((suma, libro) => suma + libro.precio, 0)
        const precioPromedio = (precioTotal / cantidadLibros).toFixed(2)
        //libro más antiguo
        const masAntiguo = catalogo.reduce((libroAntiguo, libro) => libro.anioDePublicacion < libroAntiguo.anioDePublicacion ? libro : libroAntiguo)
        //libro más caro
        const masCaro = catalogo.reduce((libroCaro, libro) => libro.precio > libroCaro.precio ? libro : libroCaro)
        console.log(`Estadísticas:
            Cantidad total de libros: ${cantidadLibros}
            Precio promedio de los libros: Q${precioPromedio}
            Libro más antiguo: ${masAntiguo.titulo} (${masAntiguo.anioDePublicacion})
            Libro más caro: ${masCaro.titulo} (Q${masCaro.precio})
        `.blue)
    }
    break
    case `6`:
        if (catalogo.length === 0) {
        console.log(`Aún no hay libros agregados al catálogo`.red)
        } else {
        let catalogoOrden= readline.question(`Como desea ordenar el catalogo?
            1. Precio (menor a mayor)
            2. Precio (mayor a menor)
            3. Anio de publicacion (mas antiguo)
            4. Anio de publicacion (mas reciente)
            `.gray)
    
        switch (catalogoOrden) {
            case "1":
                catalogo.sort((a, b) => a.precio - b.precio)
                console.log("Libros ordenados por precio ascendente, puede ver el nuevo orden con la opción 2 del menú principal".green)
            break
            case "2":
                catalogo.sort((a, b) => b.precio - a.precio)
                console.log("Libros ordenados por precio descendente, puede ver el nuevo orden con la opción 2 del menú principal".green)
            break
            case "3":
                catalogo.sort((a, b) => a.anioDePublicacion - b.anioDePublicacion)
                console.log("Libros ordenados por año de publicación, puede ver el nuevo orden con la opción 2 del menú principal".green)
            break
            case "4":
                catalogo.sort((a, b) => b.anioDePublicacion - a.anioDePublicacion)
                console.log("Libros ordenados por año de publicación, puede ver el nuevo orden con la opción 2 del menú principal".green)
            break
            default:
                console.log("Opción no válida, intente nuevamente".red)
            }
            // Guardar el catálogo ordenado
            fs.writeFileSync('catalogo.json', JSON.stringify(catalogo, null, 2))
        }
    break
    case `7`:
        if (catalogo.length === 0) {
            console.log(`Aún no hay libros agregados al catálogo`.red)
        } else {
            let editarTitulo = readline.question('Ingrese el titulo del libro que desea editar: ').toLowerCase()
            let editarLibro = catalogo.find(libro => libro.titulo === editarTitulo)
    
            if (editarLibro) {
                console.log(`Aquí tiene los datos del libro:
                Titulo: ${editarLibro.titulo}
                Autor: ${editarLibro.autor}
                Precio: Q${editarLibro.precio}
                Anio de publicacion: ${editarLibro.anioDePublicacion}
                `.blue)
                let queEditar = readline.question(`Que desea editar?
                1. Titulo
                2. Autor
                3. Precio
                4. Anio
                `.gray)
                switch (queEditar) {
                    case '1':
                        console.log(`Título actual: ${editarLibro.titulo}`)
                        editarLibro.titulo = readline.question(`Ingrese el nuevo titulo: 
                        `).toLowerCase()
                    break
                    case '2':
                        console.log(`Autor actual: ${editarLibro.autor}`)
                        editarLibro.autor = readline.question(`Ingrese el nuevo autor: 
                        `).toLowerCase()
                    break
                    case '3':
                        console.log(`Precio actual: ${editarLibro.precio}`)
                        editarLibro.precio = parseFloat(readline.question(`Ingrese el nuevo precio: 
                        `))
                    break
                    case '4':
                        console.log(`Año de publicación actual: ${editarLibro.anioDePublicacion}`)
                        editarLibro.anioDePublicacion = readline.question(`Ingrese el nuevo anio de publicacion: 
                        `)
                    break
                    default:
                        console.log("Opción no válida");
                    break
                    }
    
                console.log(`
                    El libro ${editarLibro.titulo} ha sido actualizado exitosamente. Para ver los detalles, lo
                    puede buscar manualmente con la opción 3 del menú principal, buscando el título nuevo
                    en caso de que se haya actualizado`.green)
    
                // Actualizar el archivo catalogo.json
                fs.writeFileSync('catalogo.json', JSON.stringify(catalogo, null, 2))
            } else {
                console.log(`El libro con el título "${editarTitulo}" no fue encontrado`.red)
            }
        }

    break
    case `8`:
        console.log(`Saliendo del programa`.yellow)
    break
    default:
        console.log(`Esta opción no es válida, por favor intente nuevamente`.red)


        
}
} while (opcionMenu !== `8`)