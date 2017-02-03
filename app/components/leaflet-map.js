// import Ember from 'ember'

import EmberLeafletComponent from 'ember-leaflet/components/leaflet-map'

export default EmberLeafletComponent.extend({
  didCreateLayer() {
    this._super(...arguments)

    var zoomOptions = {
      position: 'bottomleft',
      zoomInTitle: 'Približaj',
      zoomOutTitle: 'Oddalji'
    }

    if (this.get('klubiZoomControl')) {
      this.L.control.zoom(zoomOptions).addTo(this._layer)
    }
  }
})
