const tbody = document.getElementById("tbody");
const mensaje = document.getElementById("mensaje");

function peticion() {
    let albumId = document.getElementById("albumId").value;
    if (albumId === "") {
        mensaje.textContent = "Captura un albumId del 1 al 100.";
        return;
    }
    let url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId;

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            mostrarFotos(data);
        })
        .catch(error => {
            mensaje.textContent = "Error al consultar el servicio web.";
            console.error("Error al obtener los datos:", error);
        });
}

function mostrarFotos(data) {
    tbody.innerHTML = "";
    if (data.length === 0) {
        mensaje.textContent = "No hay fotos para ese albumId.";
        return;
    }
    mensaje.textContent = "Se encontraron " + data.length + " fotos.";

    data.forEach(foto => {
        const fila = document.createElement("tr");

        const cId = document.createElement("td");
        cId.textContent = foto.id;
        fila.appendChild(cId);

        const cAlbum = document.createElement("td");
        cAlbum.textContent = foto.albumId;
        fila.appendChild(cAlbum);

        const cTitle = document.createElement("td");
        cTitle.textContent = foto.title;
        fila.appendChild(cTitle);

        const cImagen = document.createElement("td");
        const img = document.createElement("img");
        img.src = foto.url;
        img.alt = foto.title;
        img.width = 120;
        img.className = "foto";
        // Si la imagen original (via.placeholder.com) no carga, se usa un servicio equivalente
        img.onerror = function () {
            this.onerror = null;
            this.src = foto.url.replace("via.placeholder.com", "placehold.co");
        };
        cImagen.appendChild(img);
        fila.appendChild(cImagen);

        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("albumId").value = 1;
    peticion();
});
