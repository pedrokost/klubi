import Ember from 'ember';
import ENV from '../config/environment';

export function initialize(application) {
  application.deferReadiness();

  var AssetMap = Ember.Object.extend();

  var promise = new Ember.RSVP.Promise(function(resolve, reject) {
    Ember.$.getJSON('assets/assetMap.json', resolve).fail(reject);
  });

  promise.then(function(assetMap) {
    AssetMap.reopen({
      assetMap: assetMap,
      resolve: function(name, getAbsolute) {
        if (getAbsolute) {
          return ENV.cdnPrepend + assetMap.assets[name];
        } else {
          return assetMap.assets[name];
        }
      }
    });
  }, function() {
    AssetMap.reopen({
      resolve: function(name, getAbsolute) {
        if (getAbsolute) {
          return ENV.cdnPrepend + name;
        } else {
          return name;
        }
      }
    });
  }).then(function() {
    application.register('assetMap:main', AssetMap, {singleton: true});
    application.inject('component', 'assets', 'assetMap:main');
    application.inject('route', 'assets', 'assetMap:main');
    application.advanceReadiness();
  });
}

export default {
  name: 'asset-map',
  initialize: initialize
};
