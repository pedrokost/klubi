import Ember from 'ember';

export default Ember.Component.extend(
  Ember.GoogleAnalyticsTrackingMixin, {

  tagName: 'section',
  classNames: ['klub-list'],
  query: '',

  syncMarkerCenterAndCardPosition: Ember.observer('klubs.@each.isHovered', function() {
    if (document.querySelector('.klub-list:hover')) {
      Ember.run.once(this, 'zoomToMarker');
    } else {
      Ember.run.once(this, 'scrollToCard');
    }
  }),

  filteredKlubs: Ember.computed('klubs', 'klubs.[].parent', 'klubs.[].name', 'query', function() {

    let isParentFilter = (klub) => {
      var klubs = this.get('klubs');

      // Return if it is a parent klub, or if its real parent does not belong to the current category.
      return klub.get('parent.content') === null || (klubs.mapBy('id').indexOf(klub.get('parent.id')) === -1);
    };

    let searchFilter = (klub, query) => {
      // TODO: Should also search in all the children and parents
      return klub.get('name').toLowerCase().indexOf(query) >= 0 || klub.get('address').toLowerCase().indexOf(query) >= 0;
    };

    let fullSearchFilter = (klub, query) => {
      // Returns true if the klub, any of its parents, or any of its children contains the search query
      let family = Ember.A([klub]);
      if (klub.get('parent.content')) {
        family.pushObject(klub.get('parent.content'))
      }
      if (klub.get('branches.length')) {
        klub.get('branches').forEach(function(b) {
          family.pushObject(b);
        });
      }
      return family.find(function(klub) {
        return searchFilter(klub, query);
      }) !== undefined;
    };

    let parentsSearchFilter = (klub, query) => {
      return isParentFilter(klub) && fullSearchFilter(klub, query);
    };

    let klubs = this.get('klubs');
    let query = this.get('query').toLowerCase();
    let filter = query ? parentsSearchFilter : isParentFilter;

    return klubs.filter(klub => {
      return filter(klub, query);
    });
  }),

  zoomToMarker() {
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

  scrollToCard() {
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

  actions: {
    setHoveredKlub(klubId, toHovered) {
      this.sendAction('setHoveredKlub', klubId, toHovered);
    }
  }
});
