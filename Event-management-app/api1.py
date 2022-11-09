from crypt import methods
from flask import Flask, url_for, request, Response, render_template, jsonify
from markupsafe import escape

# app = Flask(__name__)

events =[{
    "id": 1,
    "name": "GDG Dev Fest",
    "date": "2022-10-10",
    "location": "HUST",
},
{   "id": 2,
    "name": "BUV Christmas Prom",
    "date": "2022-12-24",
    "location": "BUV",
    }]

EVENTS ={
    "event_1":{
        "id":1,
        "name":"GDG Dev Fest",
        "date":"2022-10-10",
        "location":"HUST", 
    },
    "event_2":{
        "id":2,
        "name":"BUV Christmas Prom",
        "date":"2022-12-24",
        "location":"BUV",
    }

}
@app.route("/")
def index():
    return "<p>Hello World!</p>"

@app.route("/events", methods=['Get'])
def get_event():
    # for event in events:
    #     return jsonify(event)
    #return render_template("events.html")
    return jsonify(events)
def get_event_by_id(id):
    id = request.args.get('id')
    for event in events:
        return event[id]
    # event = [event for event in events if event["name"] == name]
    # return jsonify(event)
app.add_url_rule('/events/<int:id>', 'get_event_by_id', get_event_by_id)

@app.route("/events", methods=['POST'])
def post_event():
    event = request.get_json()
    events.append(event)
    return jsonify(events)

