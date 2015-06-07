import Ember from 'ember';


var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

export default Ember.Controller.extend({

  showBig: Ember.computed(function() {
    return random() > 0.8;
  }),

  showImage: Ember.computed(function() {
    // return random() > 0.5;
    return true;
  }),

  categoryClass: Ember.computed(function() {
    var category = this.get('content.category');
    return 'category-' + category.split(' ')[0];
  }),
});
