from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')

# Database Configuration

username = "tharun"
password = "password515"
host = "localhost"
port = 3306
database = "geardrive"

app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{username}:{password}@{host}:{port}/{database}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)

# Define User Table
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    password = db.Column(db.String(255), nullable=False)
    door_building_name = db.Column(db.String(255), nullable=False)
    street_name = db.Column(db.String(255), nullable=False)
    landmark = db.Column(db.String(255))
    district = db.Column(db.String(100))
    state = db.Column(db.String(100))
    country = db.Column(db.String(100), nullable=False)

# Create tables
with app.app_context():
    db.create_all()

# user registration endpoing
@app.route('/api/signup', methods=['POST'])
def add_user():

    try:
        new_user = User(
            username=request.form['username'],
            email=request.form['email'],
            first_name=request.form['first_name'],
            last_name=request.form['last_name'],
            password=request.form['password'],
            door_building_name=request.form['door_building_name'],
            street_name=request.form['street_name'],
            landmark=request.form['landmark'],
            district=request.form['district'],
            state=request.form['state'],
            country=request.form['country']
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully!", "user_id": new_user.id}), 201
    except Exception as e:
        db.session.rollback()
        return "user already exist with same username or email", 400

# user login endpoint
@app.route('/api/login', methods=['POST'])
def login():
    user = User.query.filter_by(username=request.form['username']).first()
    if user:
        if user.password != request.form['password'] :
            return jsonify({"error": "Wrong password"}), 401

        return jsonify({
            "id": user.id,
            "username": user.username,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "door_building_name": user.door_building_name,
            "street_name": user.street_name,
            "landmark": user.landmark,
            "district": user.district,
            "state": user.state,
            "country": user.country
        }), 200
    else:
        return jsonify({"error": "User not found"}), 404
    
def get_updated_value(new_value, current_value):
    return new_value if new_value is not None and new_value.strip() != "" else current_value
    
@app.route('/api/updateprofile', methods=['PUT'])
def updateprofile():
    user = User.query.filter_by(username=request.form["username"]).first()
    if not user:
        return jsonify({"error": "User not found"}), 404

    try:
        # Update user fields
        user.email = get_updated_value(request.form.get('email'), user.email)
        user.first_name = get_updated_value(request.form.get('first_name'), user.first_name)
        user.last_name = get_updated_value(request.form.get('last_name'), user.last_name)
        user.password = get_updated_value(request.form.get('password'), user.password)
        user.door_building_name = get_updated_value(request.form.get('door_building_name'), user.door_building_name)
        user.street_name = get_updated_value(request.form.get('street_name'), user.street_name)
        user.landmark = get_updated_value(request.form.get('landmark'), user.landmark)
        user.district = get_updated_value(request.form.get('district'), user.district)
        user.state = get_updated_value(request.form.get('state'), user.state)
        user.country = get_updated_value(request.form.get('country'), user.country)

        db.session.commit()
        return jsonify({"message": "User updated successfully!"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 400

# serving static react files
@app.route('/')
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)