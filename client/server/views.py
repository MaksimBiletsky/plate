from datetime import datetime, timedelta
import pdb

import jwt

from flask import Blueprint, request, jsonify, send_from_directory, current_app
import os

from werkzeug.security import generate_password_hash, check_password_hash


from .services.db import db
from .services.token import token_required, create_token
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
    data = request.get_json()
    
    email = data['email']
    name = data['name']
    password = data['password']

    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))
    
    db.session.add(new_user)
    db.session.commit()

    return create_token(new_user)
    
@views.route('/api/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    user = User.authenticate(**data)

    if not user:
        return jsonify({ 'message': 'Invalid credentials', 'authenticated': False }), 401
    
    return create_token(user)

@views.route('/api/transfer')
def style():
    pass

@views.route('/api/gallery')
@cross_origin()
@token_required
def gallery():
    return "ABBOBA"

@views.route('/', defaults={'path': ''})
@views.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(views.static_folder + '/' + path):
        return send_from_directory(views.static_folder, path)
    else:
        return send_from_directory(views.static_folder, 'index.html')
