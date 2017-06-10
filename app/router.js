import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootUrl: config.rootUrl
});

Router.map(function() {
  this.route("oprojektu");
  this.route("dodaj-klub");

  this.route("embeds", function() {
    this.route("categoryklubs", function() {
      this.route("klub", { path: "/:klub_id" }, function() {});
    });
  });

  this.route(
    "seznam-klubov",
    {
      path: "seznam-klubov"
    },
    function() {
      this.route("klubs", {
        path: "/:category"
      });
    }
  );

  this.route("obcinas", { path: "/obcina" }, function() {
    this.route(
      "obcina-category",
      { path: "/:obcina_id/:category" },
      function() {}
    );
  });

  this.route(
    "klubs",
    {
      path: "/:category",
      resetNamespace: true
    },
    function() {
      this.route(
        "klub",
        {
          path: "/:klub_id"
        },
        function() {
          this.route("uredi");
        }
      ); // generates subroutes

      this.route("new");
    }
  );
});

export default Router;
