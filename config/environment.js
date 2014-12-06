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

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // TODO: Review before going go production!!
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' *.googleapis.com *.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' api.zatresi.si app.local:3000 *.app.local:3000",
      'img-src': "'self' data: *.gstatic.com *.googleapis.com *.google.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",  // TODO: Elimintae unsafe-inline
      'media-src': "'self'",
      'report-uri': "localhost:4200",
      'frame-src': "www.google.com"
    }
  };

  if (environment === 'development') {
    // ENV.host = 'http://api.app.local:3000';
    ENV.host = '/api';
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.contentSecurityPolicy['script-src'] = ENV.contentSecurityPolicy['script-src'] + " 'unsafe-eval' localhost:4200";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
