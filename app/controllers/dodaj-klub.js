import Ember from 'ember'
import ENV from '../config/environment'

export default Ember.Controller.extend({
  // application: Ember.inject.controller(),
  editorEmail: null,
  submitButtonDisabled: false,
  flashMessages: Ember.inject.service(),
  formattedAddress: null,

  actions: {
    sendNewKlubEmail() {
      var self = this
      var klub = this.get('model')
      klub.set('categories', klub.get('categories').split(',').map(cat => cat.trim().dasherize()))
      klub.set('address', this.get('formattedAddress'))
      var editorEmail = this.get('editorEmail')
      klub = JSON.parse(JSON.stringify(klub))
      klub.editor = editorEmail
      klub.facebook_url = klub.facebookUrl
      delete klub.facebookUrl
      var data = JSON.stringify({klub: klub})
      const flashMessages = Ember.get(this, 'flashMessages')
      this.set('submitButtonDisabled', true)

      Ember.$.ajax({
        url: ENV.host + '/klubs',
        method: 'POST',
        data: data,
        accepts: 'application/json',
        processData: false,
        contentType: 'application/json'
      }).done(function () {
        self.set('submitButtonDisabled', false)
        flashMessages.success('Hvala za obvestilo o klubu ;)! Podatke bomo preverili in klub v kratkem prikazali na strani')
        self.transitionToRoute('application')
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
