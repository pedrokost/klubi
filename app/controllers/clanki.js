import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['category'],
  category: 'vse',

  categories: function() {
    var cats = this.get('model').mapProperty('category').uniq();
    cats.unshift('vse');
    return cats;
  }.property('model'),

  filteredClaneks: function() {
    var filterBy = this.get('category');
    if (filterBy !== 'vse') {
      return this.get('model').filterBy('category', filterBy);
    } else {
      return this.get('model');
    }
  }.property('model', 'category'),
});
