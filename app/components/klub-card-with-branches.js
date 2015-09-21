import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['klub-card-inner'],
  attributeBindings: ['klubId:data-id'],

  parentCSSClasses: Ember.computed('isHovered', function() {
    let cssClass = 'klub-card-parent';
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

  mouseEnter(event) {
    // Hover over the title -> got to first
    this.sendAction('action', this.get('klubId'), {hovered: true});
  },
  mouseLeave(event) {
    // Hover over the title -> got to first
    this.sendAction('action', this.get('klubId'), {hovered: false})
  },

  actions: {
    setHoveredKlub(klubId, toHovered) {
      this.sendAction('action', klubId, toHovered);
    }
  }
});
