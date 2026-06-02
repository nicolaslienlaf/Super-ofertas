document.addEventListener("DOMContentLoaded", () => {
    const catalogo = document.getElementById("catalogo-tienda");
    
    fetch("mercado.json")
        .then(response => response.json())
        .then(data => {
            data.productos.forEach(p => {
                const card = document.createElement("div");
                card.className = "producto-card";
                
                card.innerHTML = `
                    <span class="id-badge">ID #${p.id_alimento}</span>
                    <h4>${p.nombre}</h4>
                    <p class="marca">${p.marca}</p>
                    <p class="precio">$${p.precio_unidad.toLocaleString('es-CL')}</p>
                    <button class="btn-simular">Sincronizar Precio</button>
                `;
                catalogo.appendChild(card);
            });
        })
        .catch(err => console.error("Error cargando el catálogo:", err));
});
