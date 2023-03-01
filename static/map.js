const latitudeInput = document.querySelector('#latitude-input')
const longitudeInput = document.querySelector('#longitude-input')

const map = L.map('map').setView([46, -95], 6)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add event handler. When map is clicked, read the latitude and longitude, 
// and fill in the values for the inputs 
map.on('click', function(mapEvent) {
    const latLng = mapEvent.latlng  
    latitudeInput.value = latLng.lat
    longitudeInput.value = latLng.lng
})