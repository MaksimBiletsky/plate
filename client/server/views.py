from datetime import datetime, timedelta
import pdb

import jwt

from flask import Blueprint, request, jsonify, send_from_directory, send_file
import os

from werkzeug.security import generate_password_hash, check_password_hash


from .services.db import db
from .services.token import token_required, create_token
from .models import User, GaleryPhoto
from flask_cors import CORS, cross_origin

from ../../ML/evaluate import set_style


views = Blueprint('views', __name__, static_folder='../dist/')

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

@views.route('/api/transfer', methods=['POST'])
@cross_origin()
def transfer():
    style = request.form['style']
    uploaded_file = request.files['file']
    pdb.set_trace()
    if uploaded_file.filename != '':
        uploaded_file.save('server/loaded_images/'+uploaded_file.filename)

    # PLACE FOR TRANSFER FUNCTION
    set_style(style, uploaded_file)

    #SHOULD RETURN CREATED IMAGE FROM server/transfered_images
    return send_file('transfered_images/' + style + "-" + uploaded_file.filename)
    

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
