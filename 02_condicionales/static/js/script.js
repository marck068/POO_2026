/* 1. El Portero Digital
Crea una variable edad. Si la edad es 18 o más, muestra por consola: "Acceso permitido a la App".
Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad".
 */

function porteroDigital() {
    let edad = parseInt(prompt("Ingrese su edad:"));
    if (edad >= 18) {
        alert("Acceso permitido a la App")
    } else{
        alert("Acceso denegado: necesitas ser mayor de edad")
    };
};

/* 2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
 */

function validarNombre() {
    let nombre = prompt("Ingrese su nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuarios}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    }
};

/* 3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
*/

function filtroDuplicado() {
    
}