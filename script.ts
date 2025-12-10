// Cargar productos
fetch("productos.json")
    .then(res => res.json())
    .then(productos => mostrarProductos(productos));

function mostrarProductos(lista) {
    const cont = document.getElementById("productos-container");
    cont.innerHTML = "";

    lista.forEach((prod, index) => {
        const div = document.createElement("div");
        div.classList.add("producto");

        // Imagen principal para WhatsApp
        let imgPrincipal = prod.imagenes ? prod.imagenes[0] : prod.imagen;

        // Mensaje para WhatsApp
        let mensaje = encodeURIComponent(
            `¡Hola buen día! Me gustaría más información sobre este artículo:\n\n${prod.nombre}\n${imgPrincipal}`
        );

        div.innerHTML = `
            <h3>${prod.nombre}</h3>

            <!-- Galería Lightbox -->
            <a href="${imgPrincipal}" data-lightbox="galeria${index}">
                <img src="${imgPrincipal}" />
            </a>

            ${prod.imagenes ? prod.imagenes.slice(1).map(img =>
                `<a href="${img}" data-lightbox="galeria${index}" style="display:none;">
                    <img src="${img}">
                </a>`
            ).join("") : ""}

            <p>${prod.descripcion}</p>
            <p><strong>${prod.precio}</strong></p>

            <a class="boton-wsp" 
               href="https://wa.me/34643261975?text=${mensaje}" 
               target="_blank">
                Me interesa
            </a>
        `;

        cont.appendChild(div);
    });
}
]
