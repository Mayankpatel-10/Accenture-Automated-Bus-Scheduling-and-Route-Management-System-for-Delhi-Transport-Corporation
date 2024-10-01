// Initialize map
var map = L.map('map').setView([28.6139, 77.2090], 11);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Simulated data
function updateStats() {
    document.getElementById('activeBuses').textContent = Math.floor(Math.random() * 50) + 100;
    document.getElementById('alerts').textContent = Math.floor(Math.random() * 5) + " delays, " + Math.floor(Math.random() * 3) + " breakdowns";
}

// Update stats every 5 seconds
updateStats();
setInterval(updateStats, 5000);

// Simulated bus locations
var buses = [
    [28.6129, 77.2295],
    [28.6331, 77.2200],
    [28.6500, 77.2300],
    [28.6139, 77.2090],
    [28.5672, 77.2100]
];

// Add bus markers to map
buses.forEach(function(bus) {
    L.marker(bus).addTo(map);
});

function showAlert(section) {
    alert(section + " functionality is not implemented in this demo.");
}
