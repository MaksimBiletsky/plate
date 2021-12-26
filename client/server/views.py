from datetime import datetime, timedelta
import pdb

import jwt

from flask import Blueprint, request, jsonify, send_from_directory, current_app
import os

from werkzeug.security import generate_password_hash, check_password_hash


from .services.db import db
from .services.token import token_required
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
    return jsonify({'user':
                        {
                        'id': new_user.id, 
                        'name': new_user.name,
                        'email': new_user.email,
                        'password': new_user.password
                        }
                    }), 201
    
@views.route('/api/login', methods=['POST'])
@cross_origin()
def login():
    data = request.get_json()
    # pdb.set_trace()
    user = User.authenticate(**data)

    if not user:
        return jsonify({ 'message': 'Invalid credentials', 'authenticated': False }), 401
    
    token = jwt.encode({
        'sub': user.email,
        'iat':datetime.utcnow(),
        'exp': datetime.utcnow() + timedelta(minutes=30)},
        current_app.config['SECRET_KEY'])
    return jsonify({ 'token': token })

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
