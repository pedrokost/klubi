import Ember from "ember";

export default Ember.Route.extend({
  titleToken: "Nalagam..."
  // Leaflet is sometimes not correctly re-initialized. This removes the
  // number of times leaflet is created and destroyed, therefore reducing
  // the number of errors!
  // renderTemplate() {
  //   this.render('klubs')
  // }
});
