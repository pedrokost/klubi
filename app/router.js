import EmberRouter from "@ember/routing/router";
import config from "./config/environment";
import RouterScroll from "ember-router-scroll";

const Router = EmberRouter.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
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
    this.route("obcina", { path: "/:obcina_id" }, function() {});
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
