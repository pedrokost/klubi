import Ember from 'ember'
import Prerenderable from 'zatresi/mixins/after-render-prerenderable'
import LeafletRefreshable from 'zatresi/mixins/refresh-leaflet'

export default Ember.Route.extend(Prerenderable, LeafletRefreshable, {
})
