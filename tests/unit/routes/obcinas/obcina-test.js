import { moduleFor, test } from "ember-qunit";

moduleFor("route:obcinas/obcina", "Unit | Route | obcinas/obcina", {
  // Specify the other units that are required for this test.
  needs: ["service:asset-map", "service:scheduler", "service:router-scroll"]
});

test("it exists", function(assert) {
  let route = this.subject();
  assert.ok(route);
});
