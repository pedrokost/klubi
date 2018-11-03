import { module, test } from 'qunit';
import { setupTest } from "ember-qunit";

module("Unit | Route | embeds/categoryklubs/index", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    var route = this.owner.lookup("route:embeds/categoryklubs/index");
    assert.ok(route);
  });
});
