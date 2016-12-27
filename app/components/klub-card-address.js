import Ember from 'ember';

export default Ember.Component.extend({
  branchCSSClasses: Ember.computed('isHovered', function() {
    let cssClass = 'klub-card-branch js-klub-card';
    if (this.get('isHovered')) {
      cssClass += ' is-hovered';
    };
    return cssClass;
  }),

  mouseEnter() {
    this.sendAction('action', this.get('klubId'), {hovered: true});
  },
  mouseLeave() {
    this.sendAction('action', this.get('klubId'), {hovered: false})
  }
});
