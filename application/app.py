from flask import request, render_template, jsonify, url_for, redirect, g
from .models import User
from index import app, db
from sqlalchemy.exc import IntegrityError
from .utils.auth import generate_token, requires_auth, verify_token
# import MySportsFeed object
from ohmysportsfeedspy import MySportsFeeds
import http.client
import json


@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/<path:path>', methods=['GET'])
def any_root_path(path):
    #index.html
    return render_template('index.html')


@app.route("/api/user", methods=["GET"])
@requires_auth
def get_user():
    return jsonify(result=g.current_user)


@app.route("/api/create_user", methods=["POST"])
def create_user():
    incoming = request.get_json()
    user = User(
        email=incoming["email"],
        password=incoming["password"]
    )
    db.session.add(user)

    try:
        db.session.commit()
    except IntegrityError:
        return jsonify(message="User with that email already exists"), 409

    new_user = User.query.filter_by(email=incoming["email"]).first()

    return jsonify(
        id=user.id,
        token=generate_token(new_user)
    )


@app.route("/api/get_token", methods=["POST"])
def get_token():
    incoming = request.get_json()
    user = User.get_user_with_email_and_password(incoming["email"], incoming["password"])
    if user:
        return jsonify(token=generate_token(user))

    return jsonify(error=True), 403


@app.route("/api/is_token_valid", methods=["POST"])
def is_token_valid():
    incoming = request.get_json()
    is_valid = verify_token(incoming["token"])

    if is_valid:
        return jsonify(token_is_valid=True)
    else:
        return jsonify(token_is_valid=False), 403

# ***MySportsFeed Operations***
msf = MySportsFeeds(version="1.0")

# authenticate using MySportsFeed account credentials 
msf.authenticate("umucproject", "umucproject")

# Using https://github.com/MySportsFeeds/mysportsfeeds-python as guidence 
# make requests, specifying: league, season, feed, format etc.
# get data from NBA season 2016-2017
# get player gamelogs for Stephen Curry
@app.route("/api/nba_2016_2017", methods=["GET"])  
def get_nba_2016_2017_Season():
    output = msf.msf_get_data(league='nba',season='2016-2017-regular',feed='player_gamelogs',format='json',player='stephen-curry')
    return jsonify(output)

# Connect to Football Data API
# Using https://api.football-data.org/documentation as guidence
connection = http.client.HTTPConnection('api.football-data.org')
headers = { 'X-Auth-Token': '5cbb007031974aa591abfe4102d69473', 'X-Response-Control': 'minified' }

# List all available competitions
# get competitions
@app.route("/api/competitions", methods=["GET"])
def get_competitions():
    connection.request('GET', '/v1/competitions', None, headers )
    response = json.loads(connection.getresponse().read().decode())
    return jsonify(response)

# List all teams for a certain competition
# get premier league teams
@app.route("/api/premier_league", methods=["GET"])
def get_premier_league():
    connection.request('GET', '/v1/competitions/398/teams', None, headers )
    response = json.loads(connection.getresponse().read().decode())
    return jsonify(response)

# Show one team
# get Manchester United FC
@app.route("/api/manchester_united", methods=["GET"])
def get_manchester_united():
    connection.request('GET', '/v1/teams/66', None, headers )
    response = json.loads(connection.getresponse().read().decode())
    return jsonify(response)

# Show all players for a certain team
# get Manchester United players
@app.route("/api/manchester_united_players", methods=["GET"])
def get_manchester_united_players():
    connection.request('GET', '/v1/teams/66/players', None, headers )
    response = json.loads(connection.getresponse().read().decode())
    return jsonify(response)

# Show all fixtures for a certain team
# get Manchester United 2015/16 Home fixtures
@app.route("/api/manchester_united_home_fixtures", methods=["GET"])
def get_manchester_united_home_fixtures():
    connection.request('GET', '/v1/teams/66/fixtures?timeFrame=n14&venue=home', None, headers )
    response = json.loads(connection.getresponse().read().decode())
    return jsonify(response)

