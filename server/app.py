from flask import Flask
from flask import Flask, request
import ipdb


app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/style', methods=['POST', 'GET'])
def style():
    if request.method == 'POST':
        ipdb.set_trace()
        return request.args.get('palitre')

if __name__ == '__main__':
    app.run()
