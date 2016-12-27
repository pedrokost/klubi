import Ember from 'ember'

export default Ember.Route.extend({
  redirect() {
    this.transitionTo('seznam-klubov.klubs', 'fitnes')
  }
})
