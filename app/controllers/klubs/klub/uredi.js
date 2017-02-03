import Ember from 'ember'
import ENV from '../../../config/environment'
import rollbar from 'rollbar';

export default Ember.Controller.extend({
  submitButtonDisabled: false,
  flashMessages: Ember.inject.service(),

  actions: {
    updateKlub() {
      const klub = this.get('model')
      const flashMessages = Ember.get(this, 'flashMessages')
      this.set('submitButtonDisabled', true)
      const self = this;
      klub.save().then(function() {
        self.set('submitButtonDisabled', false)
        flashMessages.success('Hvala za popravke ;) Podatke bomo preverili in jih v kratkem prikazali na strani')
        self.transitionToRoute('klubs.klub', klub.get('id'))
      }).catch(function(err) {
        console.error(err);
        rollbar.error('Something went wrong when updating klub', err)
        self.set('submitButtonDisabled', false)
        Ember.$("html, body, .bodywrapper").animate({ scrollTop: 0 }, "slow")
        flashMessages.error('Prišlo je do neznane napake pri shranjevanju podatkov o klubu :( Če ti ponovno ne uspe, me o tem prosim obesti na pedro@klubi.si.')
      })
    }
  }
})
