from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, This is Rubi using flask....!</p>"

if __name__ == '_main_':
    app.run(host='0.0.0.0', port=5000)
    