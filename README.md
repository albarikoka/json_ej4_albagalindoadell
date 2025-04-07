# json_ej4_albagalindoadell
Este ejercicio consiste en la creación de una página web interactiva que utiliza JavaScript (DOM) para mostrar tarjetas dinámicas con información de categorías de comidas obtenidas desde una API json. Incluye un filtro que permite seleccionar una categoría específica y mostrar solo las tarjetas relacionadas. 


Para completar este ejercicio, me he basado en los tutoriales de W3Schools y MDN, además de lo aprendido en clase.

Primero, seleccioné los elementos del DOM que iba a necesitar, y creé una variable para almacenar todas las categorías que se obtendrían de la API.

Luego, utilicé fetch para hacer una solicitud a la API y obtener la información de las comidas, en especifico de las categorias. Una vez que los datos se cargan correctamente, se guardan en la variable allCategories. Después, llamé a dos funciones: una para crear/actualizar las tarjetas con las categorías y otra para llenar el panel del filtro con los botones de cada categoría. Si algo salía mal durante la solicitud, cree un catch para mostrar un mensaje de error en la consola.

La función renderCards se encarga de eliminar el contenedor de tarjetas y luego crear una nueva tarjeta para cada categoría usando la función crear_card. En esta última, se crean dinámicamente los elementos HTML necesarios mediante el uso del DOM. Todo esto se hace utilizando métodos como createElement, setAttribute y appendChild. También añadí un evento al botón de favorito para que cambie de estado (activo o inactivo) al hacer clic.

Para el filtro, la función populateCategoryPanel genera un botón para cada categoría dentro del panel desplegable. Cuando se hace clic en uno de estos botones, se utiliza el método filter para filtrar las categorías que coincidan con la seleccionada. Luego, se renderizan solo las tarjetas de esa categoría y el panel se oculta automáticamente. Además, añadí un evento al botón del filtro para mostrar u ocultar el panel al hacer clic.

