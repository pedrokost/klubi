import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNameBindings: ["defaultClass", "randomImageClass"],
  defaultClass: "home-hero-title",
  randomImageClass: computed(function() {
    const NUM_IMAGES = 25;
    let randImage = Math.ceil(Math.random() * (NUM_IMAGES - 1));
    return `image-${randImage}`;
  })
});
