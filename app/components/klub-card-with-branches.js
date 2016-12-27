import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['klub-card-inner js-klub-card'],
  attributeBindings: ['klubId:data-id'],

  branchesWithCategory: Ember.computed('branches', 'categoryShown', function() {
    // Make sure to alway load the data corresponding to only the selected
    // category
    let category = this.get('categoryShown');

    return this.get('branches').reject(branch => {
      return branch.get('categories').indexOf(category) === -1;
    });
  })
});
