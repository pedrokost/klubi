import Ember from 'ember';
import config from './config/environment';


var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('oprojektu');
  this.route('dodaj-klub');
  this.route('clanki', function() {});
  this.resource('klubs', { path: '' }, function() {
    this.resource('klub', { path: '/:klub_id' }, function() {}); // generates subroutes
    this.route('new');
  });
});
