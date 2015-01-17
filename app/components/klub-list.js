import Ember from 'ember';

export default Ember.Component.extend(
  Ember.GoogleAnalyticsTrackingMixin, {

  tagName: 'section',
  classNames: ['klub-list'],

  scrollToKlubListener: function() {
    if (document.querySelector('.klub-list:hover')) {
      Ember.run.once(this, 'zoomToMarker');
    } else {
      Ember.run.once(this, 'scrollToCard');
    }
  }.observes('klubs.@each.isHovered'),

  zoomToMarker: function() {
    // If mouse stays on a card for awhile, zoom to the corresponding marker in the map.
    // Do nothing if on any 'klub' route
    if(this.get('currentRouteName') === 'klub') {
      return;
    }

    var hoveredKlub = this.get('klubs').findBy('isHovered', true);

    if (hoveredKlub) {
      Ember.run.later(this, function(){
        var hoveredKlub2 = this.get('klubs').findBy('isHovered', true);
        if (hoveredKlub2 && hoveredKlub.get('id') === hoveredKlub2.get('id')) {
          this.sendAction('action', hoveredKlub);
        }
      }, 500);
    }
  },

  scrollToCard: function() {
    // Scroll to the klub in the list if it is outside of the viewport
    var hoveredKlub = this.get('klubs').findBy('isHovered', true);

    function doTheScroll (){
      Ember.run.next(this, function(){  // TODO: Not sure this improves anything
        var $dom = Ember.$('.klub-card[data-id=' + hoveredKlub.get('id') + ']');
        $dom.scrollintoview({direction: 'y'});
      });
    }

    if (hoveredKlub) {
      Ember.run.later(this, function(){
        var hoveredKlub2 = this.get('klubs').findBy('isHovered', true);
        if (hoveredKlub2 && hoveredKlub.get('id') === hoveredKlub2.get('id')) {
          doTheScroll();
          this.trackEvent('klub', 'scroll-to-klub', hoveredKlub.get('id'), 1);
        }
      }, 500);
    }
  },
});
