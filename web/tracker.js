function start() {
  if (!navigator.geolocation) {
    alert("GPS tidak didukung");
    return;
  }

  navigator.geolocation.watchPosition(
    pos => {
      fetch("/location", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy
        })
      });
    },
    err => alert("Izin GPS ditolak"),
    { enableHighAccuracy: true }
  );
}
