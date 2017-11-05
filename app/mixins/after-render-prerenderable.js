import { scheduleOnce } from '@ember/runloop';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  afterModel(model, transition) {
    this._super(model, transition);
    transition.then(function() {
      scheduleOnce('afterRender', this, function() {
        // console.log('Done Transitioning');
        window.prerenderReady = true;
      });
    });
  }
});
