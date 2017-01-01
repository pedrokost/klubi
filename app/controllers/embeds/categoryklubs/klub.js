import Ember from 'ember';

export default Ember.Controller.extend({
  'embeds/categoryklubs': Ember.inject.controller(),
  categoryShown: Ember.computed.alias('embeds/categoryklubs.category')
});
