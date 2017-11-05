/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: "klubi",
    environment,
    host: "//api.klubi.si",
    locationType: "router-scroll",
    historySupportMiddleware: true,
    rootURL: "/",
    cdnPrepend: "https://d2ne2albfoowfo.cloudfront.net/",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
        String: true
      }
    },
    flashMessageDefaults: {
      timeout: 15000,
      extendedTimeout: 1000,
      types: ["alert", "error", "notice", "success"]
    },
    "ember-cli-string-helpers": {
      only: ["titleize"]
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    ifa: {
      enabled: false,
      inline: true
    },
    rollbar: {
      accessToken: "d66dea1a45e7484eaa73e7f24dbd7044",
      enabled: environment === "production"
    },
    routerScroll: {
      scrollElement: "#bodywrapper"
    },
    // TODO: Review before going go production!!
    contentSecurityPolicy: {
      // "default-src": "'none'",
      "script-src":
        "'self' 'unsafe-inline' *.googleapis.com *.gstatic.com d2ne2albfoowfo.cloudfront.net connect.facebook.net www.google-analytics.com cdnjs.cloudflare.com d37gvrvc0wt4s1.cloudfront.net",
      "font-src": "'self' fonts.gstatic.com d2ne2albfoowfo.cloudfront.net",
      "connect-src":
        "'self' api.klubi.si app.local:3000 *.app.local:3000 app.local:3200 *.app.local:3200 d2ne2albfoowfo.cloudfront.net maps.googleapis.com",
      "img-src":
        "'self' data: *.gstatic.com *.googleapis.com *.google.com  *.tiles.mapbox.com d2ne2albfoowfo.cloudfront.net www.google-analytics.com fitnes.si www.fitness-info.si www.facebook.com scontent.xx.fbcdn.net",
      "style-src":
        "'self' 'unsafe-inline' fonts.googleapis.com d2ne2albfoowfo.cloudfront.net", // TODO: Elimintae unsafe-inline
      "media-src": "'self' d2ne2albfoowfo.cloudfront.net",
      "report-uri": "localhost:4200",
      "frame-src":
        "www.google.com www.facebook.com *.ak.facebook.com staticxx.facebook.com m.facebook.com",
      "font-src": "'self' d2ne2albfoowfo.cloudfront.net fonts.gstatic.com"
    }
  };

  if (environment === "development") {
    // ENV.host = "/api"; // For fixtures
    ENV.host = "https://api.klubi.si";
    // ENV.host = "http://api.app.local:3200";

    ENV["ember-cli-mirage"] = {
      enabled: false
    };

    ENV.contentSecurityPolicy["script-src"] =
      ENV.contentSecurityPolicy["script-src"] + " 'unsafe-eval' localhost:4200";

    // ENV.APP.LOG_RESOLVER = true
    // ENV.APP.LOG_ACTIVE_GENERATION = true
    // ENV.APP.LOG_TRANSITIONS = true
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    // ENV.APP.LOG_VIEW_LOOKUPS = true
  }

  if (environment === "test") {
    ENV.host = "http://api.app.local:3200";
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
  }

  if (environment === "production") {
    ENV.ifa = {
      enabled: true,
      inline: true
    };
  }

  if (environment === "funky") {
    // ENV.host = 'http://api.app.local:3200'
    ENV.host = "//api.klubi.si";
  }

  return ENV;
};
