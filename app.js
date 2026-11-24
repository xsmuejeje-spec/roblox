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

        if (todo.completed) {
            cCompleted.textContent = "Completado";
        } else {
            cCompleted.textContent = "Pendiente";
        }

        fila.appendChild(cCompleted);
        tbody.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', peticion);
