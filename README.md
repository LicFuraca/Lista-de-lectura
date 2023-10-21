# To Do

-   Cree el contexto, ahora tengo que pensar las actuales funcionalidades donde deberían ir. Antes de pasar al
    siguiente paso. Por ejemplo filtrar los libros.

-   Libros disponibles vs Libros en lista de lectura.
    Para esto necesito un global state, o sea, un context donde pueda actualizar
    los libros de ambos a la vez. O sea, restando y sumando. Toca re-escribir código.

    -   Va bien pero ahora se cruzan los setFilteredBooks, porque cada vez que filtro, reseteo esa lista, entonces
        se cruza con los que filtré en readingList.

-   LocalStorage
    Debo lograr que al recargar la página, los datos no se borren.
