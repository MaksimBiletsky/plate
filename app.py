from flask import Flask
from flask_migrate import Migrate

from views import views
from services.db import db

from models import User
from flask_login import LoginManager

from flask_cors import CORS


import os

app = Flask(__name__)

CORS(app)

env_config = os.getenv("APP_SETTINGS", "config.DevelopmentConfig")
app.config.from_object(env_config)

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(views)

login_manager = LoginManager()
login_manager.login_view = 'views.login'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

if __name__ == "__main__":
    app.run()
