import Ember from 'ember';
import config from './config/environment';


var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('oprojektu');
  this.resource('klubs', { path: '' }, function() {
    this.resource('klub', { path: '/:klub_id' }, function() {});
  });
});

export default Router;
