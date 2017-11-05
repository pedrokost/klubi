import { moduleFor, test } from "ember-qunit";

moduleFor("route:obcinas/index", "Unit | Route | obcinas/index", {
  // Specify the other units that are required for this test.
  needs: ["service:scheduler", "service:router-scroll"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
