import Ember from 'ember';


var seed = 1;
function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

export default Ember.Controller.extend({

  showBig: function() {
    return random() > 0.8;
  }.property(),

  showImage: function() {
    return random() > 0.5;
  }.property(),

  categoryClass: function() {
    var category = this.get('content.category');
    return 'category-' + category.split(' ')[0];
  }.property(),
});
