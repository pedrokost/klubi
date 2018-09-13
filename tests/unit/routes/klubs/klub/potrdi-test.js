import { moduleFor, test } from 'ember-qunit';

moduleFor('route:klubs/klub/potrdi', 'Unit | Route | klubs/klub/potrdi', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ["service:scheduler", "service:router-scroll", "service:flashMessages"]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
