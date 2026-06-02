// Diccionario simple de iconos de alimentos según palabras clave para simular fotos de e-commerce
function obtenerIconoAlimento(nombre) {
    const n = nombre.toLowerCase();
    if (n.includes("leche")) return "🥛";
    if (n.includes("pan")) return "🍞";
    if (n.includes("huevo")) return "🥚";
    if (n.includes("atún") || n.includes("atun")) return "🐟";
    if (n.includes("jamón") || n.includes("jamon")) return "🐷";
    if (n.includes("queso")) return "🧀";
    return "📦";
}

document.addEventListener("DOMContentLoaded", () => {
    const catalogo = document.getElementById("catalogo-tienda");
    
    fetch("mercado.json")
        .then(response => response.json())
        .then(data => {
            data.productos.forEach(p => {
                const card = document.createElement("div");
                card.className = "producto-card";
                
                // Obtenemos el emoji representativo del producto
                const icono = obtenerIconoAlimento(p.nombre);
                
                card.innerHTML = `
                    <span class="badge-id">Ref #${p.id_alimento}</span>
                    <div class="product-thumb">${icono}</div>
                    <h4>${p.nombre}</h4>
                    <p class="marca">${p.marca}</p>
                    <p class="precio">$${p.precio_unidad.toLocaleString('es-CL')}</p>
                    <button class="btn-agregar">
                        <span>🛒</span> Agregar al Carrito
                    </button>
                `;
                catalogo.appendChild(card);
            });
        })
        .catch(err => console.error("Error cargando el catálogo e-commerce:", err));
