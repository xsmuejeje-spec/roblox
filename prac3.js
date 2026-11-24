const tbody = document.getElementById("tbody");

function peticion() {
    let url = 'https://jsonplaceholder.typicode.com/albums';

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            mostrarAlbums(data);
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}

function mostrarAlbums(data) {
    tbody.innerHTML = "";
    data.forEach(album => {
        const fila = document.createElement("tr");

        const cUser = document.createElement("td");
        cUser.textContent = album.userId;
        fila.appendChild(cUser);

        const cId = document.createElement("td");
        cId.textContent = album.id;
        fila.appendChild(cId);

        const cTitle = document.createElement("td");
        cTitle.textContent = album.title;
        fila.appendChild(cTitle);

        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', peticion);
