import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | klubs/klub/podaj mnenje', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:klubs/klub/podaj-mnenje');
    assert.ok(controller);
  });
});
