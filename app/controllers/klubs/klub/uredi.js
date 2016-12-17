import Ember from 'ember'
import ENV from '../../../config/environment'

export default Ember.Controller.extend({
  editorEmail: null,
  submitButtonDisabled: false,
  flashMessages: Ember.inject.service(),
  formattedAddress: null,

  actions: {
    updateKlub() {
      var self = this
      var klub = this.get('model')
      if (Ember.$.isArray(klub.get('categories'))) {
        // User didn't edit the categories field
      } else {
        klub.set('categories', klub.get('categories').split(',').map(cat => cat.trim().dasherize()))
      }
      klub.set('address', this.get('formattedAddress'))
      var editorEmail = this.get('editorEmail')
      let klub_id = klub.id

      klub = JSON.parse(JSON.stringify(klub))
      klub.editor = editorEmail
      klub.facebook_url = klub.facebookUrl
      delete klub.facebookUrl

      var data = JSON.stringify({klub: klub})
      const flashMessages = Ember.get(this, 'flashMessages')
      this.set('submitButtonDisabled', true)

      Ember.$.ajax({
        url: ENV.host + '/klubs/' + klub_id,
        method: 'PATCH',
        data: data,
        accepts: 'application/json',
        processData: false,
        contentType: 'application/json'
      }).done(function () {
        self.set('submitButtonDisabled', false)
        flashMessages.success('Hvala za popravke ;) Podatke bomo preverili in jih v kratkem prikazali na strani')
        self.transitionToRoute('klubs.klub', klub_id)
      }).fail(function () {
        self.set('submitButtonDisabled', false)
        flashMessages.error('Prišlo je do neznane napake pri shranjevanju podatkov o klubu :( Če ti ponovno ne uspe, me o tem prosim obesti na pedro@zatresi.si.')
      })
    },

    setAddressAttrs(latitude, longitude, formattedAddress, town) {
      this.get('model').setProperties({latitude, longitude, town});
      this.setProperties({formattedAddress});
    }
  }
})
