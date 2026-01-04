from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json, os, time
import config

app = Flask(__name__)
CORS(app)

if not os.path.exists(config.DATA_FILE):
    with open(config.DATA_FILE, "w") as f:
        json.dump([], f)

@app.route("/")
def web():
    return send_from_directory("../web", "index.html")

@app.route("/map")
def map_page():
    return send_from_directory("../web", "map.html")

@app.route("/tracker.js")
def js():
    return send_from_directory("../web", "tracker.js")

@app.route("/location", methods=["POST"])
def location():
    data = request.json
    data["timestamp"] = int(time.time())

    with open(config.DATA_FILE, "r+") as f:
        logs = json.load(f)
        logs.append(data)
        f.seek(0)
        json.dump(logs, f, indent=2)

    return jsonify({"status": "ok"})

@app.route("/logs", methods=["GET"])
def logs():
    with open(config.DATA_FILE) as f:
        return jsonify(json.load(f))

if __name__ == "__main__":
    app.run(host=config.HOST, port=config.PORT)
