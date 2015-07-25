import Ember from 'ember';

export default Ember.Component.extend(
  Ember.GoogleAnalyticsTrackingMixin, {

  tagName: 'section',
  classNames: ['klub-list'],
  query: '',
  filteredKlubs: null,

  syncMarkerCenterAndCardPosition: Ember.observer('klubs.@each.isHovered', function() {
    if (document.querySelector('.klub-list:hover')) {
      Ember.run.once(this, 'zoomToMarker');
    } else {
      Ember.run.once(this, 'scrollToCard');
    }
  }),

  filteredKlubs: Ember.computed('klubs', 'query', function() {

    var query = this.get('query').toLowerCase();

    if (!query) { return this.get('klubs'); }

    return this.get('klubs').filter(klub => {
      debugger
      return klub.get('name').toLowerCase().indexOf(query) >= 0 || klub.get('address').toLowerCase().indexOf(query) >= 0;
    });
  }),

  zoomToMarker: function() {
    // If mouse stays on a card for awhile, zoom to the corresponding marker in the map.
    // Do nothing if on any 'klub' route
    if(this.get('isShowPage')) {
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
        var $dom = Ember.$(`.klub-card[data-id='${hoveredKlub.get('id')}']`);
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
