window.addEventListener('scroll', function() {
  var titulo = document.getElementById('titulo');
  if (window.scrollY > 0) {
    titulo.classList.add('h1-hidden');
  } else {
    titulo.classList.remove('h1-hidden');
  }
});














/* EN ESTA SECCION ES PARA QUE LOS DROPBOX FUNCIONEN CORRECTAMENTE */

// Obtener elementos del DOM
const plusButton = document.getElementById('plus');
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close');
const uploadForm = document.getElementById('upload-form');
const feedContainer = document.getElementById('feed');
const navbarLinks = document.querySelectorAll('.navbar-item');

// Función para mostrar el modal
const openModal = () => {
  modal.style.display = 'block';
};

// Función para cerrar el modal
const closeModal = () => {
  modal.style.display = 'none';
};

// Función para agregar una tarea al feed
const agregarTarea = (nombre, descripcion) => {
  // Crear un elemento de tarea
  const tareaElement = document.createElement('div');
  tareaElement.classList.add('tarea');

  // Agregar contenido a la tarea
  const nombreElement = document.createElement('h3');
  nombreElement.textContent = nombre;

  const descripcionElement = document.createElement('p');
  descripcionElement.textContent = descripcion;

  tareaElement.appendChild(nombreElement);
  tareaElement.appendChild(descripcionElement);

  // Agregar la tarea al feed
  feedContainer.appendChild(tareaElement);
};

// Evento de clic en el botón "plus" para abrir el modal
plusButton.addEventListener('click', openModal);

// Evento de clic en el botón de cerrar para cerrar el modal
closeModalButton.addEventListener('click', closeModal);

// Evento de envío del formulario para agregar la tarea al feed
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar que se recargue la página

  // Obtener los valores ingresados por el estudiante
  const nombreInput = document.getElementById('nombre');
  const descripcionInput = document.getElementById('descripcion');
  const nombre = nombreInput.value;
  const descripcion = descripcionInput.value;

  // Agregar la tarea al feed
  agregarTarea(nombre, descripcion);

  // Limpiar los campos del formulario
  nombreInput.value = '';
  descripcionInput.value = '';

  // Cerrar el modal
  closeModal();

  // Mostrar la sección "Home" al agregar una tarea
  showSection('home');
});

// Función para mostrar la sección correspondiente al hacer clic en el enlace del navbar
const showSection = (sectionId) => {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach((section) => {
    section.style.display = 'none';
  });

  // Mostrar la sección correspondiente al ID proporcionado
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'block';
  }
};

// Agregar evento de clic a cada enlace del navbar
navbarLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evitar comportamiento predeterminado del enlace
    const sectionId = link.getAttribute('href').substring(1); // Obtener el ID de la sección del enlace
    showSection(sectionId); // Mostrar la sección correspondiente
  });
});

// Función para mostrar la sección "Home" al cargar la página
const showHomePage = () => {
  showSection('home');
};

// Ejecutar la función al cargar la página
window.addEventListener('load', showHomePage);








/* SECCIONES DE LA APP WEB */

 // Obtener todas las secciones y los botones del navbar
 const sections = document.querySelectorAll('.section');
 const navItems = document.querySelectorAll('.navbar-item');

 // Agregar el evento de clic a cada botón del navbar
 navItems.forEach((item) => {
   item.addEventListener('click', (e) => {
     e.preventDefault();

     // Obtener el href del botón clicado
     const target = item.getAttribute('href');

     // Mostrar la sección correspondiente y ocultar las demás
     sections.forEach((section) => {
       section.classList.toggle('active', section.id === target.slice(1));
     });
   });
 });




 /* Search */

// Obtener todos los elementos de clase "subject-section"
const subjectSections = document.querySelectorAll('.subject-section');

// Agregar un evento de clic a cada elemento
subjectSections.forEach((section) => {
  section.addEventListener('click', () => {
    // Alternar la clase "open" para mostrar/ocultar el botón de "Descargar PDF"
    section.classList.toggle('open');
  });
});




/*likes*/

// Función para alternar el estado de "Me gusta" del profesor y actualizar el contador
function toggleLike(button) {
  button.classList.toggle('liked');
  const icon = button.querySelector('i');
  icon.classList.toggle('fas');
  icon.classList.toggle('far');
  
  // Actualizar el contador
  const counter = document.getElementById('like-counter');
  const count = parseInt(counter.textContent);
  if (button.classList.contains('liked')) {
    counter.textContent = count + 1;
  } else {
    counter.textContent = count - 1;
  }
}

// Evento de carga de la página para configurar el estado inicial de los botones "Me gusta"
window.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((button) => {
    button.classList.remove('liked');
    const icon = button.querySelector('i');
    icon.classList.add('far');
    icon.classList.remove('fas');
  });
});
