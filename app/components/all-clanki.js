import Ember from 'ember';

export default Ember.Component.extend({
  showImages: Ember.on('didInsertElement', function() {
    this.$(".clanek-image").each(function() {
      var attr = $(this).attr('data-image-src');

      if (typeof attr !== typeof undefined && attr !== false) {
        $(this).css('background-image', 'url('+attr+')');
      }
    });
  }),

  showImagesOnFilterChange: Ember.observer('controller.category', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.showImages();
    });
  })
});
