document.addEventListener("DOMContentLoaded", () => {
    const tabla = document.getElementById("cuerpo-tabla");
    
    fetch("mercado.json")
        .then(response => response.json())
        .then(data => {
            data.productos.forEach(p => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td><code>#${p.id_alimento}</code></td>
                    <td><strong>${p.nombre}</strong></td>
                    <td>${p.marca}</td>
                    <td style="color: #22c55e; font-weight: bold;">$${p.precio_unidad.toLocaleString('es-CL')}</td>
                `;
                tabla.appendChild(fila);
            });
        })
        .catch(err => console.error("Error cargando la API del mercado:", err));
});