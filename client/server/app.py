from os import environ 


from flask import Flask
from flask_migrate import Migrate
from flask_login import LoginManager
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('SQLALCHEMY_DATABASE_URI')
app.config['SECRET_KEY'] = environ.get('SECRET_KEY')


from .views import views
from .services.db import db

from .models import User

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
