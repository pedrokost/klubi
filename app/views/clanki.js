import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    this.$(".clanek-image").each(function() {
      var attr = $(this).attr('data-image-src');

      if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background-image', 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,1)), url('+attr+')');
      }
    });
  }
});
