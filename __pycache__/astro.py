# RA= 0h 41.8m, Dec= +41° 16´
# latitude and longitude of Jacobs University Bremen
# this data could be fed using GPS sensor from mobile device

import numpy as np
import astropy.units as u
from astropy.time import Time
from astropy.coordinates import SkyCoord, EarthLocation, AltAz
from datetime import datetime
from astroquery.simbad import Simbad
import astropy.coordinates as coord
import json
import requests
from flask import Flask, request
from flask.json import jsonify

app = Flask(__name__)

lati = 53.166158
long = 8.650049

# current time is the local time of the user


@app.route('/getmethod', methods=['GET'])
def abc():
    information = request.data
    print(information)


@app.route('/get', methods=['GET'])
def altAzmtoRaDec(azim, alti):
    jacobs = EarthLocation(lat=lati*u.deg, lon=long*u.deg, height=11*u.m)
    utcoffset = +1*u.hour  # Central European Time
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    time = Time(current_time) - utcoffset
    altaz = SkyCoord(az=azim*u.degree, alt=alti*u.degree,
                     location=jacobs, obstime=time, frame='altaz')
    query_results = Simbad.query_region(coord.SkyCoord(
        altaz.icrs, frame='icrs'), radius=0.2*u.degree)
    names = []
    for i in range(len(query_results)):
        names.append(query_results['MAIN_ID'][i])
    # print(names)
    return names


altAzmtoRaDec(0, 0)
