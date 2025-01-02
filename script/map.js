// Coordenadas reales (reemplaza con las tuyas)
const lat = 2.678809; // Latitud
const lng = -76.562124; // Longitud

// Inicializar el mapa con las coordenadas reales
const map = L.map('map').setView([lat, lng], 13); // Cambia el nivel de zoom si es necesario

// Agregar una capa de mapa (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Añadir un marcador en las coordenadas reales
L.marker([lat, lng])
  .addTo(map)
  .bindPopup(`
    <div style="font-size: 16px; font-weight: bold; color: #E56A48;; text-align: center;">
      ¡Aquí estamos! <br> El Shaddai Food.
    </div>
  `)
  .openPopup();

// Añadir un círculo rojo alrededor de las coordenadas
var circle = L.circle([lat, lng], {
    color: '#E56A48',          // Borde del círculo
    fillColor: '#E56A48',     // Color de relleno
    fillOpacity: 0.3,      // Opacidad del relleno
    radius: 900            // Radio en metros
}).addTo(map);