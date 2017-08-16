import Ember from "ember";

export default Ember.Component.extend({
  classNameBindings: ["defaultClass", "randomImageClass"],
  defaultClass: "home-hero-title",
  randomImageClass: Ember.computed(function() {
    const NUM_IMAGES = 25;
    let randImage = Math.ceil(Math.random() * (NUM_IMAGES - 1));
    return `image-${randImage}`;
  })
});
