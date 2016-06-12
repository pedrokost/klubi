import Ember from 'ember'

/* globals L */

var southWest = L.latLng(45.0, 13.0), // spodaj levo
  northEast = L.latLng(47.2, 17) // zgoraj desno

export default Ember.Controller.extend(Ember.GoogleAnalyticsTrackingMixin, {
  zoom: 8,
  markerCenter: [46.122636, 14.81546], // Slivna, Slovenia,
  category: 'fitnes',
  maxBounds: L.latLngBounds(southWest, northEast),

  anyKlub: Ember.computed('filteredKlubs', function () {
    return this.get('filteredKlubs')
  }),

  filteredKlubs: Ember.computed('category', 'model', function () {
    var category = this.get('category')

    if (!this.get('model')) { return Ember.A() }

    return this.get('model').filter(function (klub) {
      return klub.get('categories').indexOf(category) >= 0
    })
  }),

  actions: {
    showKlub(klub) {
      this.transitionToRoute('klubs.klub', klub)
    },
    zoomToMarker(klub) {
      this.send('zoomToLocation', klub.get('location'), 12)
      this.trackEvent('klub', 'zoom-to-marker', klub.get('id'), 1)
    },
    zoomToLocation(location, zoomLevel) {
      this.set('zoom', zoomLevel)
      this.set('markerCenter', location)
    },
    setHoveredKlub(klubId, toHovered) {
      let klub = this.get('model').find(klub => klub.get('id') === klubId)
      klub.set('isHovered', toHovered.hovered)
    }
  }
})
