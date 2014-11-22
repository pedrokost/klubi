import Ember from 'ember';
import config from './config/environment';


var Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.resource('klub', { path: '/:klub_id' }); // TODO: Use slug
});

export default Router;
