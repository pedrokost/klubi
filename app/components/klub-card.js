import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['klub-card'],
  attributeBindings: ['klubId:data-id'],

  linkCSSClasses: Ember.computed('isHovered', function () {
    let cssClass = 'klub-card-inner';
    if (this.get('isHovered')) {
      cssClass += ' is-hovered';
    };
    return cssClass;
  }),

  mouseEnter: function() {
    // TODO this should be in the action, not herer
    // var val = this.$()[0].getBoundingClientRect();
    // console.table(val.top);
    this.set('isHovered', true);
  },
  mouseLeave: function() {
    this.set('isHovered', false);
  }
});
