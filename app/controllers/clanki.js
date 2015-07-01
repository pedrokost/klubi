import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['category'],
  category: 'vse',

  categories: Ember.computed('model', function() {
    var cats = this.get('model').mapProperty('category').uniq();
    cats.unshift('vse');
    return cats;
  }),

  filteredClaneks: Ember.computed('model', 'category', function() {
    var filterBy = this.get('category');
    if (filterBy !== 'vse') {
      return this.get('model').filterBy('category', filterBy);
    } else {
      return this.get('model');
    }
  }),
});
