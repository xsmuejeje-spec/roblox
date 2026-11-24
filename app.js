const tbody = document.getElementById("tbody");

function peticion() {
    let url = 'https://jsonplaceholder.typicode.com/todos';

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            mostrarTodos(data);
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
        });
}

function mostrarTodos(data) {
    tbody.innerHTML = "";
    data.forEach(todo => {
        const fila = document.createElement("tr");

        const cUser = document.createElement("td");
        cUser.textContent = todo.userId;
        fila.appendChild(cUser);

        const cId = document.createElement("td");
        cId.textContent = todo.id;
        fila.appendChild(cId);

        const cTitle = document.createElement("td");
        cTitle.textContent = todo.title;
        fila.appendChild(cTitle);

        const cCompleted = document.createElement("td");

        const etiqueta = document.createElement("span");
        if (todo.completed) {
            etiqueta.textContent = "Completado";
            etiqueta.className = "estado estado-completado";
        } else {
            etiqueta.textContent = "Pendiente";
            etiqueta.className = "estado estado-pendiente";
        }
        cCompleted.appendChild(etiqueta);

        fila.appendChild(cCompleted);
        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', peticion);
