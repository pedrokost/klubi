import Ember from 'ember';
import RefreshLeafletMixin from '../../../mixins/refresh-leaflet';
import { module, test } from 'qunit';

module('Unit | Mixin | refresh leaflet');

// Replace this with your real tests.
test('it works', function(assert) {
  var RefreshLeafletObject = Ember.Object.extend(RefreshLeafletMixin);
  var subject = RefreshLeafletObject.create();
  assert.ok(subject);
});
