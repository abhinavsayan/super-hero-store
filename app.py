from flask import jsonify, send_from_directory, request, Flask
import uuid
app = Flask(__name__)

@app.route('/service/get-items',  methods=['GET'])
def get_items():
    return jsonify([{
      'id': 1,
      'name': 'Batman',
      'price': 44.21,
      'img' : 'server-img/bat.jpg'
    },
    {
      'id': 2,
      'name': 'Superman',
      'price': 14.21,
      'img' : 'server-img/super.jpg'
    },
    {
      'id': 3,
      'name': 'Shazam',
      'price': 10.21,
      'img' : 'server-img/shazm.jpg'
    },
    {
      'id': 4,
      'name': 'Wonder Woman',
      'price': 43.21,
      'img' : 'server-img/ww.jpg'
    },
    {
      'id': 5,
      'name': 'Aqua Man',
      'price': 11.21,
      'img' : 'server-img/aqua.jpg'
    },
    {
      'id': 6,
      'name': 'Flash',
      'price': 35.21,
      'img' : 'server-img/flash.jpg'
    }])

@app.route('/service/process-order',  methods=['POST'])
def save_order():
    order = request.args.get('order')
    print('Received Order')
    print(order)
    return jsonify({
      'orderId' : uuid.uuid1()
    })

@app.route('/server-img/<path:path>/')
def send_img(path):
    return send_from_directory('server-img', path)

@app.route('/')
def send_index():
    return send_from_directory('dist', 'index.html')

@app.route('/<path:path>/')
def send_static(path):
    return send_from_directory('dist', path)