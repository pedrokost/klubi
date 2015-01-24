import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['recent-categories'],
  recentCategories: [
    Ember.Object.create({identifier: 'fitnes', name: 'Fitnes'}),
    Ember.Object.create({identifier: 'wellness', name: 'Wellness'}),
    Ember.Object.create({identifier: 'karate', name: 'Karate'}),
    Ember.Object.create({identifier: 'frizbi', name: 'Frizbi'})
  ]
});
