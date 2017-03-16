import Ember from 'ember'
import rollbar from 'rollbar';

export default Ember.Controller.extend({
  submitButtonDisabled: false,
  flashMessages: Ember.inject.service(),

  actions: {
    createKlub() {
      const flashMessages = Ember.get(this, 'flashMessages')
      const klub = this.get('model')

      // Validate: all branches have full address
      klub.get('branches').forEach(function(branch) {
        if (!branch.get('address') || !branch.get('latitude') || !branch.get('longitude') || !branch.get('town')) {

          flashMessages.error('Vnesi vse naslove krajev treningov');
        }
      })

      // Stop if errors
      if (flashMessages.get('queue').map(function(message) {
        return message.get('type')
      }).filter(function(type) {
        return type==='error'
      }).length > 0) {
        // TODO: scroll to top
        return;
      }

      this.set('submitButtonDisabled', true)

      const self = this;
      let newBranches = klub.get('branches').filterBy('isNew')
      let dirtyBranches = klub.get('branches').filterBy('isDirty')
      let deletedBranches = klub.get('branches').filterBy('isDeleted')

      klub.save().then(function() {
        newBranches.invoke('deleteRecord')
        dirtyBranches.invoke('rollbackAttributes')
        deletedBranches.invoke('rollbackAttributes')
        klub.rollbackAttributes();

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
