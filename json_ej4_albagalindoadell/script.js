// para completar este ejercicio se han consultado los tutoriales tanto de w3schools como de MDN.

// PRIMERO SE SELECCIONAN LOS ELEMENTOS DEL DOM QUE SE VAN A UTILIZAR

// Contenedor donde se mostraran las tarjetas
const products = document.querySelector("section.products"); 
// Botón para abrir/cerrar el filtro
const filterButton = document.querySelector("#filter-button");
// Panel desplegable del filtro con las categorías 
const categoryPanel = document.querySelector("#category-panel");
// Aqui se guardaran todas las categorías obtenidas del API de json
let allCategories = []; 


// ----------------------------------------------------------------------------------------------------------

// FETCH PARA OBTENER LA INFORMACIÓN DEL API DE JSON

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res=>res.json())
.then(data=>{
    // Guardar las categorías obtenidas
    allCategories = data.categories; 
    // Mostrar todas las tarjetas inicialmente
    renderCards(allCategories); 
    // Llenar el panel del filtro con las categorías
    populateCategoryPanel(allCategories); 
})


// ----------------------------------------------------------------------------------------------------------

// PARA CAPTURAR EL ERROR CUANDO ALGO VA MAL Y ESPECIFICAR QUE ERROR ÉS

.catch(err=>console.log("Algo va mal :(", err))


// ----------------------------------------------------------------------------------------------------------

// FUNCIÓN PARA ACTUALIZAR (RENDERIZAR) LAS TARJETAS EN EL DOM

function renderCards(categories) {

    // Borrar las tarjetas ya creadas
    products.innerHTML = ""; 

    categories.forEach(element => {
        // Crear una tarjeta para cada categoría
        crear_card(element);
    });
}


// ----------------------------------------------------------------------------------------------------------

// FUNCIÓN PARA CREAR UNA TARJETA (CARD) CON LA INFORMACIÓN DE CADA CATEGORÍA

function crear_card(element){

    // Crea el contenedor general de la card
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    products.prepend(card);
    
    // Crear el contenedor de la imagen y insertar la imagen
    const picture = document.createElement("picture");
    picture.innerHTML = `<img class="image" src="${element.strCategoryThumb}" alt="image ${element.strCategory}">`;
    card.append(picture);

    // Crear el contenedor del contenido (texto) de la tarjeta
    const content = document.createElement("div");
    content.setAttribute("class", "card-content");
    card.append(content);

    // Crear el titulo h2 dentro del contenedor de contenido
    const category = document.createElement("h2");
    category.innerHTML = `${element.strCategory}`;
    content.append(category);

    // Crear el botón de favorito
    const favorite = document.createElement("button");
    favorite.setAttribute("class", "favorite" );
    favorite.innerHTML = `<i class="fa-solid fa-heart fa-2xl"></i>`;
    card.append(favorite);

    // Evento para activar/desactivar la clase "active" del botón
    favorite.addEventListener("click", () => {
        favorite.classList.toggle("active");
    });

    // Crear el parrafo p dentro del contenedor de contenido
    const description = document.createElement("p");
    description.innerHTML = `${element.strCategoryDescription}`;
    content.append(description);
}

// Para crear los elementos del html desde el dom, como hemos visto en clases anteriores, primero se asigna que va a ser lo que vamos a crear, despues se le asigna el atributo que queremos (class), y por último se le añade al contenedor que queramos, bien mediante innerHTML como es el caso de este ejercicio o mediante textContent, finalmente se une el elemento creado a su padre o a donde pertenece mediante nodos.


// ----------------------------------------------------------------------------------------------------------

// fUNCIÓN PARA LLENAR EL PANEL DEL FILTRO CON LAS CATEGORÍAS OBTENIDAS DEL API

function populateCategoryPanel(categories) {

    // Limpiar el panel de categorías para evitar duplicados
    categoryPanel.innerHTML = ""; 

    categories.forEach(category => {

        // Crear un botón para cada categoría
        const button = document.createElement("button");

        // Asignar el nombre de la categoría al botón
        button.textContent = category.strCategory; 

        button.addEventListener("click", () => {

            // Filtrar las categorías según la seleccionada
            const filteredCategories = allCategories.filter(cat => cat.strCategory === category.strCategory);
            // Renderizar solo las tarjetas filtradas
            renderCards(filteredCategories); 

            // Ocultar el panel de filtro una vez utilizado
            categoryPanel.classList.add("hidden"); 
        });

        // Añadir el botón al panel
        categoryPanel.appendChild(button);
    });
}



// EVENTO PARA ACTIVAR/DESACTIVAR EL PANEL DEL FILTRO AL HACER CLICK EN EL BOTÓN

filterButton.addEventListener("click", () => {
    categoryPanel.classList.toggle("hidden");
});
