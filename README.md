# consent-gps

Consent-based live GPS location sharing using Flask and HTML5 Geolocation.
Gps Consent Tracker adalah aplikasi berbasis web + backend
yang memungkinkan pengguna **membagikan lokasi GPS secara real-time
dengan persetujuan eksplisit (opt-in)**.

❗ Project ini **TIDAK** melakukan pelacakan berdasarkan nomor telepon,
IMSI, atau metode ilegal lainnya.

---

🏷️ GitHub Topics (Tags)
🔑 Utama (Wajib)

gps
live-location
geolocation
consent-based
privacy-friendly
python
flask
javascript
html5
termux
arm64
cloudflared
self-hosted
open-source
mit-license

## 🚀 Fitur Utama

- 📍 Live GPS tracking (latitude, longitude, accuracy)
- ✅ Persetujuan pengguna melalui browser (HTML5 Geolocation API)
- 🔗 Bisa digunakan via link (SMS / WhatsApp / Telegram)
- 🧠 Nomor HP hanya sebagai media pengiriman link (opsional)
- 🖥️ Backend Flask (ringan & kompatibel ARM64)
- 📱 Support Termux / Kali Linux / Android
- ☁️ Bisa dipublish via Cloudflared
- 🧾 Log lokasi dalam format JSON

---

## 🧩 Opsi Penggunaan

### 🔹 Opsi 1 – Direct Consent
1. Pengguna membuka link
2. Browser meminta izin GPS
3. Lokasi dikirim secara live ke server

### 🔹 Opsi 2 – Consent via Nomor HP
1. Link dikirim via SMS / WhatsApp / Telegram
2. Pengguna mengklik link
3. Browser meminta izin GPS
4. Lokasi mulai terkirim

📌 Nomor HP **tidak diproses oleh sistem**.

---

## 🛠️ Teknologi

- Python 3
- Flask
- HTML5 Geolocation API
- JavaScript
- JSON logging
- python
- api
- json
- arm64
- termux
- kali-linux

---

🌐 Deployment

cloudflared
reverse-proxy
self-hosted
web-app

⚖️ Legal & Etika

open-source
mit-license
gdpr-compliant
privacy
ethical-tracking

📌 Use Case

family-tracking
courier-tracking
emergency-sharing
education
research

## ▶️ Cara Menjalankan

### 1️⃣ Install dependency
```bash
pip install -r requirements.txt

> ⚠️ DISCLAIMER  
> This project requires explicit user consent.
> Any misuse for unauthorized tracking is strictly prohibited.

