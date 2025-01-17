// Coordenadas reales 
const lat = 9.187460; // Latitud
const lng = -75.555972; // Longitud

// Inicializar el mapa con las coordenadas reales
const map = L.map('map', {
  scrollWheelZoom: false, // Desactivar el zoom con la rueda del ratón
  touchZoom: false,       // Desactivar el zoom táctil
  dragging: false         // Desactivar el arrastre por defecto
}).setView([lat, lng], 13); // Cambia el nivel de zoom si es necesario

// Activar el movimiento y el zoom solo cuando el usuario haga clic
map.on('click', function() {
  map.dragging.enable();       // Habilitar el arrastre
  map.scrollWheelZoom.enable(); // Habilitar el zoom con la rueda del ratón
  map.touchZoom.enable();      // Habilitar el zoom táctil
});

// Agregar una capa de mapa (OpenStreetMap)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Añadir un marcador en las coordenadas reales
L.marker([lat, lng])
  .addTo(map)
  .bindPopup(`
    <div style="font-size: 16px; font-weight: bold; color: #E56A48; text-align: center;">
      ¡Aquí estamos! <br> El Shuddai Food.
    </div>
  `)
  .openPopup();

// Añadir un círculo rojo alrededor de las coordenadas
var circle = L.circle([lat, lng], {
  color: '#E56A48',          // Borde del círculo
  fillColor: '#E56A48',     // Color de relleno
  fillOpacity: 0.3,         
  radius: 900                
}).addTo(map);
