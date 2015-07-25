/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'zatresi',
    environment: environment,
    baseURL: '/',
    host: 'http://api.zatresi.si',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    flashMessageDefaults: {
      timeout            : 15000,
      types              : [ 'alert', 'error', 'notice', 'success' ]
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // TODO: Review before going go production!!
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' *.googleapis.com *.gstatic.com d3s8w0mc0h7w8s.cloudfront.net connect.facebook.net www.google-analytics.com",
      'font-src': "'self' fonts.gstatic.com d3s8w0mc0h7w8s.cloudfront.net",
      'connect-src': "'self' api.zatresi.si app.local:3000 *.app.local:3000 d3s8w0mc0h7w8s.cloudfront.net www.kimonolabs.com",
      'img-src': "'self' data: *.gstatic.com *.googleapis.com *.google.com  *.tiles.mapbox.com d3s8w0mc0h7w8s.cloudfront.net www.google-analytics.com fitnes.si www.fitness-info.si",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com d3s8w0mc0h7w8s.cloudfront.net",  // TODO: Elimintae unsafe-inline
      'media-src': "'self' d3s8w0mc0h7w8s.cloudfront.net",
      'report-uri': "localhost:4200",
      'frame-src': "www.google.com www.facebook.com *.ak.facebook.com",
      'font-src': "'self' d3s8w0mc0h7w8s.cloudfront.net fonts.gstatic.com"
    }
  };

  if (environment === 'development') {
    ENV.host = '/api';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    // window.ENV.LOG_EVENT_TRACKING = true; // Google Analytics see what is tracked

    ENV.contentSecurityPolicy['script-src'] = ENV.contentSecurityPolicy['script-src'] + " 'unsafe-eval' localhost:4200";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
