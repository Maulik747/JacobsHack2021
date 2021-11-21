from flask import Flask, request
from flask.json import jsonify


import numpy as np
import astropy.units as u
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation, AltAz
from datetime import datetime
from astroquery.simbad import Simbad
import astropy.coordinates as coord
import json
import requests
#import request
app = Flask(__name__)


@app.route('/getmethod', methods=['GET', 'POST'])
def abc():
    information = request.json()
    return(information)


# @app.route('/get', methods=['POST'])
# def altAzmtoRaDec(azim, alti):
#     jacobs = EarthLocation(lat=lati*u.deg, lon=long*u.deg, height=11*u.m)
#     utcoffset = +1*u.hour  # Central European Time
#     current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
#     time = Time(current_time) - utcoffset
#     altaz = SkyCoord(az=azim*u.degree, alt=alti*u.degree,
#                      location=jacobs, obstime=time, frame='altaz')
#     query_results = Simbad.query_region(coord.SkyCoord(
#         altaz.icrs, frame='icrs'), radius=0.2*u.degree)
#     names = []
#     for i in range(len(query_results)):
#         names.append(query_results['MAIN_ID'][i])
#     # print(names)
#     return names
if __name__ == "__main__":
    app.run(debug=True, port=8080)
