from crypt import methods
from flask import Flask, url_for, request, Response, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello World!</p>"

@app.route("/events", methods=['Get'])
def get_event():
    return render_template("events.html")
