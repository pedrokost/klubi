import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('klub', {
      // name: 'Name',
      // email: 'name@klub.com',
      // address: 'Za Gasilskim domom 11, 1290 Grosuplje'
    });
  }
});
