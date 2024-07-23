import threading
import os
import uuid 

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "test"


@app.route('/search', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        data = request.json
        query = data.get("query")
        if query:
            try:
                processVideoThred = threading.Thread(target=tes, args=(query))
                processVideoThred.start()
            except Exception as e:
                print("background process failed")
                return
            return data
        else:
            return jsonify({"error": "Invalid query"}), 400
    else:
        return 'Content-Type not supported!'
    

def tes(query):
    print(query)

if __name__ == '__main__':
    app.run(host='127.0.0.1', threaded=True)