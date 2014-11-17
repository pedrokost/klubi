/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var options = {
  hinting: false,
  tests: false,
  minifyJS: {
    enabled: false,
    options: {
        mangle: false,
        compress: false
      }
  }
}; // TODO: delete in production

var app = new EmberApp(options);

// Leaflet
app.import('bower_components/leaflet-dist/leaflet-src.js');
app.import('bower_components/leaflet-dist/leaflet.css');
app.import('bower_components/ember-leaflet/dist/ember-leaflet.js');
app.import('bower_components/leaflet-plugins/layer/tile/Google.js');
// Leaflet clustering
app.import('bower_components/leaflet.markerclusterer/dist/MarkerCluster.css');
app.import('bower_components/leaflet.markerclusterer/dist/MarkerCluster.Default.css');
app.import('bower_components/leaflet.markerclusterer/dist/leaflet.markercluster.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();
