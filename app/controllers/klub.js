import Ember from 'ember';

export default Ember.Controller.extend({

  location: Ember.computed.alias('model.location'),

});
