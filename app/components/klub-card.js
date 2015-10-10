import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['klub-card-inner js-klub-card'],
  attributeBindings: ['klubId:data-id'],

  linkCSSClasses: Ember.computed('isHovered', function () {
    let cssClass = 'klub-card-parent';
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
