import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['recent-categories'],
  recentCategories: [
    Ember.Object.create({name: 'fitnes'}),
    // Ember.Object.create({name: 'gimnastika'})
  ]
});
