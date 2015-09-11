import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-card klub-card--with-branches'],
  attributeBindings: ['klubId:data-id'],

  parentCSSClasses: Ember.computed('isHovered', function() {
    let cssClass = 'klub-card-parent';
    if (this.get('isHovered')) {
      cssClass += ' is-hovered';
    };
    return cssClass;
  }),

  branchCSSClasses: Ember.computed('isHovered', function() {
    let cssClass = 'klub-card-branch';
    if (this.get('isHovered')) {
      cssClass += ' is-hovered';
    };
    return cssClass;
  }),


  linkCSSClasses: Ember.computed('isHovered', function () {
    let cssClass = '';
    if (this.get('isHovered')) {
      cssClass += ' is-hovered';
    };
    return cssClass;
  }),

  branchesWithCategory: Ember.computed('branches', 'categoryShown', function() {
    // Make sure to alway load the data corresponding to only the selected
    // category
    let category = this.get('categoryShown');

    return this.get('branches').reject(branch => {
      return branch.get('categories').indexOf(category) === -1;
    });
  }),

  mouseEnter() {
    // TODO this should be in the action, not herer
    // var val = this.$()[0].getBoundingClientRect();
    // console.table(val.top);
    this.set('isHovered', true);
  },
  mouseLeave() {
    this.set('isHovered', false);
  }
});
