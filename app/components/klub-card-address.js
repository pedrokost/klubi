import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  branchCSSClasses: computed('isHovered', function() {
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
