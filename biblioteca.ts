// Definición de la interfaz Libro
interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
    estaDisponible: boolean;
}

// Creación de un arreglo para almacenar los libros
let biblioteca: Libro[] = [];

// Función para agregar un libro a la biblioteca
function Agregar_libro(titulo: string, autor: string, anioPublicacion: number, estaDisponible: boolean) {
    // Crear un objeto libro con las propiedades proporcionadas
    const libro: Libro = {
        titulo: titulo,
        autor: autor,
        anioPublicacion: anioPublicacion,
        estaDisponible: estaDisponible
    };

    // Agregar el libro al arreglo biblioteca
    biblioteca.push(libro);
}

// Ejemplos de libros agregados a la biblioteca
Agregar_libro("Juegos del Destino", "Ciprian Gonzales", 1996, true);
Agregar_libro("Sacando lo Sucio", "Arnold Perez", 1958, true);
Agregar_libro("Las Montañas Nevadas", "Alexandra Martínez", 2028, true);
Agregar_libro("Minas Profundas", "Arturo Fregs", 1698, true);
Agregar_libro("Niños en necesidad", "Reina Acevedo", 2028, true);
Agregar_libro("Jehova Dios Soberano de todo", "Joan Manuel Gil", 2027, true);

// Mostrar la biblioteca completa en la consola
console.log(biblioteca);

console.log("=========================================================================================");

// Función para buscar un libro por su título
function buscarLibro_PorTitulo(titulo: string): Libro | null {
    for (let libro of biblioteca) {
        if (libro.titulo === titulo) {
            return libro; // Si se encuentra, devolver el libro
        }
    }
    return null; // Si no se encuentra, devolver null
}

// Buscar el libro "Juegos del Destino"
const libroBuscado = buscarLibro_PorTitulo("Juegos del Destino");
if (libroBuscado) {
    console.log("Libro encontrado:", libroBuscado);
} else {
    console.log("Libro no encontrado");
}
console.log("================================================================================================");

// Función para listar los libros disponibles en la biblioteca
function listarLibros(): void {
    for (let libro of biblioteca) {
        if (libro.estaDisponible) {
            console.log('Título:', libro.titulo, 'Autor:', libro.autor, 'Año de Publicación:', libro.anioPublicacion);
        } else {
            console.log("Biblioteca vacía");
        }
    }
}

// Mostrar los detalles de los libros disponibles
listarLibros();
