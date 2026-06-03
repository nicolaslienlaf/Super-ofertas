function obtenerIconoAlimento(nombre) {
    const n = nombre ? nombre.toLowerCase() : "";
    if (n.includes("leche") || n.includes("yogurt")) return "🥛";
    if (n.includes("pan") || n.includes("pita") || n.includes("marraqueta")) return "🍞";
    if (n.includes("huevo")) return "🥚";
    if (n.includes("atún") || n.includes("atun") || n.includes("merluza") || n.includes("reineta") || n.includes("salmón") || n.includes("salmon")) return "🐟";
    if (n.includes("pavo") || n.includes("pollo")) return "🍗";
    if (n.includes("vacuno") || n.includes("carne") || n.includes("lomo") || n.includes("filete")) return "🥩";
    if (n.includes("cerdo")) return "🐷";
    if (n.includes("queso") || n.includes("quesillo")) return "🧀";
    if (n.includes("camarones") || n.includes("choritos")) return "🍤";
    if (n.includes("arroz") || n.includes("fideos") || n.includes("tallarines") || n.includes("quinoa") || n.includes("gnocchi")) return "🍝";
    if (n.includes("avena") || n.includes("cereal") || n.includes("harina")) return "🥣";
    if (n.includes("lentejas") || n.includes("garbanzos") || n.includes("porotos")) return "🌾";
    if (n.includes("aceite") || n.includes("mantequilla") || n.includes("margarina")) return "🧈";
    if (n.includes("almendras") || n.includes("maní") || n.includes("mani") || n.includes("nueces") || n.includes("semillas") || n.includes("chía") || n.includes("linaza")) return "🥜";
    if (n.includes("tomate") || n.includes("zanahoria") || n.includes("lechuga") || n.includes("brócoli") || n.includes("brocoli") || n.includes("coliflor") || n.includes("pepino") || n.includes("zapallo") || n.includes("apio") || n.includes("pimentón") || n.includes("pimenton") || n.includes("cebolla") || n.includes("ajo") || n.includes("verduras") || n.includes("repollo") || n.includes("champón")) return "🥦";
    if (n.includes("palta") || n.includes("plátano") || n.includes("platano") || n.includes("manzana") || n.includes("naranja") || n.includes("pera") || n.includes("frutillas") || n.includes("arándanos") || n.includes("arandanos") || n.includes("kiwi") || n.includes("limón") || n.includes("limon") || n.includes("durazno")) return "🍎";
    if (n.includes("chocolate") || n.includes("endulzante") || n.includes("stevia") || n.includes("sucralosa") || n.includes("barra")) return "🍫";
    return "📦";
}

document.addEventListener("DOMContentLoaded", () => {
    const catalogo = document.getElementById("catalogo-tienda");
    if (!catalogo) {
        console.error("No se encontró el contenedor #catalogo-tienda en el HTML.");
        return;
    }
    
    fetch("mercado.json")
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar el archivo mercado.json");
            return response.json();
        })
        .then(data => {
            catalogo.innerHTML = ""; // Limpia por si acaso
            data.productos.forEach(p => {
                const card = document.createElement("div");
                card.className = "producto-card"; // Usa tu clase de CSS para las tarjetas
                
                const nombreProducto = p.nombre || "Naranja Jugo Feria";
                const icono = obtenerIconoAlimento(nombreProducto);
                
                card.innerHTML = `
                    <span class="badge-id">Ref #${p.id_alimento}</span>
                    <div class="product-thumb" style="font-size: 2.5rem; text-align: center; margin: 10px 0;">${icono}</div>
                    <h4 style="margin: 5px 0; font-size: 1.1rem;">${nombreProducto}</h4>
                    <p class="marca" style="color: #888; font-size: 0.85rem; margin-bottom: 8px;">${p.marca}</p>
                    <p class="precio" style="font-weight: bold; color: #ffcc00; margin-bottom: 10px;">$${p.precio_unidad.toLocaleString('es-CL')}</p>
                    <button class="btn-agregar" style="width: 100%; padding: 8px; background: #ffcc00; border: none; border-radius: 4px; font-weight: bold; cursor: pointer;">
                        Sincronizar API
                    </button>
                `;
                catalogo.appendChild(card);
            });
        })
        .catch(err => console.error("Error cargando el catálogo e-commerce completo:", err));
});
