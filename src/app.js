let articulos = ["El", "Nuestro", "Un" , "tu"]
let descripciones = ["mejor", "magnifico", "increíble","meravelluç" , "apocaliptico"];
let cosas = ["Erenthehusky", "Realmadrid", "calçot", "amic" ,"gambita"];
let terminaciones = [".com", ".net", ".cat", ".es" ,".org"];

function generarDominios() {
    let listaDominios = document.getElementById("lista-dominios");
    listaDominios.innerHTML = ""; 

    for (let i = 0; i < 10; i++) { 
        let articulo = articulos[Math.floor(Math.random() * articulos.length)];
        let descripcion = descripciones[Math.floor(Math.random() * descripciones.length)];
        let cosa = cosas[Math.floor(Math.random() * cosas.length)];
        let terminacion = terminaciones[Math.floor(Math.random() * terminaciones.length)];

        let dominio = `${articulo}${descripcion}${cosa}${terminacion}`;
        let itemLista = document.createElement("li");
        itemLista.className = "list-group-item";
        itemLista.textContent = dominio;
        listaDominios.appendChild(itemLista);
    }
}
