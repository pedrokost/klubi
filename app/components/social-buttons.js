import { scheduleOnce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',
  classNames: ['rrssb-buttons', 'rrssb-buttons--klubi'],
  classNameBindings: ['isShowPage:is-show-page'],

  didInsertElement() {
    scheduleOnce('afterRender', this, function() {
      rrssbInit();
    });
  }
});
