from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user, login_user, logout_user

from werkzeug.security import generate_password_hash, check_password_hash


from services.db import db
from models import User, GaleryPhoto

views = Blueprint('views', __name__)



@views.route('/api')
def index():
    return 'Start page!'

@views.route('/api/user')
def user():
    pass

@views.route('/api/signup', methods=['POST'])
def signup():
    email = request.args.get('email')
    name = request.args.get('name')
    password = request.args.get('password')
    
    new_user = User(email=email, name=name, password=generate_password_hash(password, method='sha256'))
    
    db.session.add(new_user)
    db.session.commit()
 
    return jsonify({'success': 'Succesfully signed up!'})

@views.route('/api/login', methods=['POST'])
def login():
    email = request.args.get('email')
    password = request.args.get('password')

    user = User.query.filter_by(email=email).first()

    if not user or not check_password_hash(user.password, password):
        return jsonify({'error': 'Please check your login details and try again.'})
    login_user(user)
    return jsonify({'success': 'Succesfully loged in!'})

@views.route('/api/logout')
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

@views.route('/')
def serve():
    pass
