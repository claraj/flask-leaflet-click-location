from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('index.html')


@app.route('/search_location')
def search_location():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')
    print(latitude, longitude)
    return render_template('search_results.html')

if __name__ == '__main__':
    app.run()