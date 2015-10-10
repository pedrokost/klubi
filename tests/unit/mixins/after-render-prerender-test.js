import Ember from 'ember';
import AfterRenderPrerenderMixin from '../../../mixins/after-render-prerender';
import { module, test } from 'qunit';

module('Unit | Mixin | after render prerender');

// Replace this with your real tests.
test('it works', function(assert) {
  var AfterRenderPrerenderObject = Ember.Object.extend(AfterRenderPrerenderMixin);
  var subject = AfterRenderPrerenderObject.create();
  assert.ok(subject);
});
