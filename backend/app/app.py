from flask import Flask, jsonify, request

app = Flask(__name__)

click_count = 0

@app.route('/click', methods=['POST'])
def click():
    global click_count
    click_count += 1
    return jsonify(count=click_count)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)