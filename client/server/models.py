from datetime import datetime
from flask_login import UserMixin
from .services.db import db

class GaleryPhoto(db.Model):
    __tablename__ = 'galery_photo'

    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(2000), unique=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

class User(UserMixin, db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    is_admin = db.Column(db.Boolean, default=False, nullable=False)
