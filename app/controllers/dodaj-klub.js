import Ember from 'ember'
import rollbar from 'rollbar';

export default Ember.Controller.extend({
  submitButtonDisabled: false,
  flashMessages: Ember.inject.service(),

  actions: {
    createKlub() {
      const flashMessages = Ember.get(this, 'flashMessages')
      this.set('submitButtonDisabled', true)

      const klub = this.get('model')
      const self = this;
      klub.save().then(function() {
        klub.reload().then(function(klub) {
          flashMessages.success('Hvala za obvestilo o klubu ;)! Podatke bomo preverili in klub v kratkem prikazali tudi na zemljevidu!')
          self.set('submitButtonDisabled', false)
          self.transitionToRoute('klubs.klub', klub.get('categories.firstObject').toLowerCase(), klub.get('id'))
        })
      }).catch(function(err) {
        // console.error(err)
        rollbar.error('Something went wrong when adding klubs', err)
        self.set('submitButtonDisabled', false)
        Ember.$("html, body, .bodywrapper").animate({ scrollTop: 0 }, "slow")
        flashMessages.error('Prišlo je do neznane napake pri shranjevanju podatkov o klubu :( Če ti ponovno ne uspe, me o tem prosim obesti na pedro@klubi.si.')
      })
    }
  }
})
