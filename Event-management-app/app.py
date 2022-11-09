from flask import Flask, request 
from flask_restful import Resource, Api, reqparse, abort
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from datetime import datetime
import os


app = Flask(__name__)
api = Api(app)
basedir = os.path.abspath(os.path.dirname(__file__))
# DAtABASE setup & config

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
#init db 
db = SQLAlchemy(app)
db.init_app(app)

#Init ma
ma = Marshmallow(app)

#Event Model
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(100), nullable=False, default=datetime.utcnow)
    location = db.Column(db.String(100))

    def __init__(self, name, date, location):
        self.name = name
        self.date = date
        self.location = location

#Event Schema
class EventSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'date', 'location')

#Init Schema
event_schema = EventSchema()
events_schema = EventSchema(many=True)

with app.app_context():
    db.create_all()

# parser arguments
# parser = reqparse.RequestParser()
# parser.add_argument('name', type=str, help='Name of the event is required', required=True)
# parser.add_argument('id')
# parser.add_argument('date', type=str, required=True, help='Date of the event has not been set')
# parser.add_argument('location', type=str)
# args = parser.parse_args() 
# parse arguments to dictionary (Need to ask reason for this)


#Resources
class EventResource(Resource):
    def get(self, id):
        # return EVENTS[event_id]
        event = Event.query.get(id)
        return event_schema.jsonify(event)

    def delete(self, id):
        # abort_if_event_doesnt_exist(event_id)
        # del EVENTS[event_id]
        # return '', 204
        event = Event.query.get(id)

        db.session.delete(event)
        db.session.commit()
        return event_schema.jsonify(event)

    def put(self, id):
        # args = parser.parse_args()
        # event = {
        #         'id': args['id'], 
        #         'name': args['name'], 
        #         'date': args['date'], 
        #         'location': args['location']
        # }
        # EVENTS[event_id] = event
        # return event, 201
        event = Event.query.get(id)

        name = request.json['name']
        date = request.json['date']
        location = request.json['location']

        event.name = name
        event.date = date
        event.location = location

        db.session.commit()

class EventsList(Resource):
    def get(self):
        return events_schema.jsonify(Event.query.all())


    def post(self):
        # args = parser.parse_args()
        # event_id = int(max(EVENTS.keys()).lstrip('event_')) + 1
        # event_id = 'event_%i' % event_id
        # EVENTS[event_id] = {
        #     "id": args['id'],
        #     "name": args['name'],
        #     "date": args['date'],
        #     "location": args['location'],
        # }

        name = request.json['name']
        date = request.json['date']
        location = request.json['location']

        new_event = Event(name, date, location)
        # add new event to db
        db.session.add(new_event)
        db.session.commit()

        return event_schema.jsonify(new_event), 201

api.add_resource(EventsList, '/events')
api.add_resource(EventResource, '/event/<id>')

if __name__ == '__main__':
    app.run(debug=True)