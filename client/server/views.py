from flask import Blueprint, request, jsonify, send_from_directory
from flask_login import login_required, current_user, login_user, logout_user
import os

from werkzeug.security import generate_password_hash, check_password_hash


from .services.db import db
from .models import User, GaleryPhoto
from flask_cors import CORS, cross_origin


views = Blueprint('views', __name__, static_folder='../dist/')

CORS(views)
CORS(views, resources={r'/*': {'origins': '*'}},CORS_SUPPORTS_CREDENTIALS = True)
# views.config['CORS_HEADERS'] = 'Content-Type'


@views.route('/api')
@cross_origin()
def index():
    return 'SQLALCHEMY_DATABASE_URI'

@views.route('/api/user')
@cross_origin()
def user():
    pass

@views.route('/api/signup', methods=['POST'])
@cross_origin()
def signup():
    email = request.args.get('email')
    name = request.args.get('name')
    password = request.args.get('password')
    
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))
    
    db.session.add(new_user)
    db.session.commit()
 
    return jsonify({'success': 'Succesfully signed up!'})

@views.route('/api/login', methods=['POST'])
@cross_origin()
def login():
    email = request.args.get('email')
    password = request.args.get('password')

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'error': 'Please check your login details and try again.'})
    login_user(user)
    return jsonify({'success': 'Succesfully loged in!'})

@views.route('/api/logout')
@cross_origin()
def logout():
    logout_user()
    return jsonify({'success': 'Succesfully loged out!'})


@views.route('/api/transfer')
def style():
    pass

@views.route('/api/gallery')
@login_required
def gallery():
    pass

@views.route('/', defaults={'path': ''})
@views.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(views.static_folder + '/' + path):
        return send_from_directory(views.static_folder, path)
    else:
        return send_from_directory(views.static_folder, 'index.html')