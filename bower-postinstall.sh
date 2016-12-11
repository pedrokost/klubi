#!/bin/bash

# leaflet.js - builds the leaflet files
cd bower_components/leaflet
npm install
jake build # TODO: later maybe limit what is included in the build
cd ../..


cd bower_components/leaflet.marketclusterer
npm install
jake build # TODO: later maybe limit what is included in the build
cd ../..
