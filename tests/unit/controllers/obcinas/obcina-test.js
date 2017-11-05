import { moduleFor, test } from "ember-qunit";

moduleFor("controller:obcinas/obcina", "Unit | Controller | obcinas/obcina", {
  // Specify the other units that are required for this test.
  needs: ["service:categories", "service:scheduler", "service:router-scroll"]
});

// Replace this with your real tests.
test("it exists", function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
