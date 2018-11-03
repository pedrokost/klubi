import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | klubs/klub/potrdi', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:klubs/klub/potrdi');
    assert.ok(route);
  });
});
