function consultar() {
    var id = document.getElementById('id').value;
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(respuesta => { return respuesta.json(); })
        .then((datos) => { mostrarInformacion(datos); })
        .catch(error => {
            document.getElementById('resultado').textContent =
                'Error al consultar el servicio web.';
        });
}

function mostrarInformacion(datos) {
    if (!datos.id) {
        document.getElementById('resultado').textContent =
            'No se encontró una publicación con ese ID (usa del 1 al 100).';
        return;
    }
    document.getElementById('resultado').textContent =
        'ID: ' + datos.id + ' | Título: ' + datos.title + ' | Contenido: ' + datos.body;
}
