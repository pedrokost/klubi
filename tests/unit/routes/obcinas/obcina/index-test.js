import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";

module("Unit | Route | /obcinas/obcina/index", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let route = this.owner.lookup("route:obcinas/obcina/index");
    assert.ok(route);
  });
});
