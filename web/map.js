let map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

let marker = null;
let accuracyCircle = null;

async function updateLocation() {
  try {
    const res = await fetch("/logs");
    const data = await res.json();

    if (!data.length) return;

    const last = data[data.length - 1];
    const lat = last.latitude;
    const lon = last.longitude;
    const acc = last.accuracy || 10;

    if (!marker) {
      marker = L.marker([lat, lon]).addTo(map);
      accuracyCircle = L.circle([lat, lon], { radius: acc }).addTo(map);
      map.setView([lat, lon], 16);
    } else {
      marker.setLatLng([lat, lon]);
      accuracyCircle.setLatLng([lat, lon]);
      accuracyCircle.setRadius(acc);
    }

  } catch (e) {
    console.error("Error fetching location:", e);
  }
}

// update tiap 3 detik
setInterval(updateLocation, 3000);
