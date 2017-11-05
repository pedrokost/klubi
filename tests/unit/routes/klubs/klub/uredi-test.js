import { moduleFor, test } from "ember-qunit";

moduleFor("route:klubs/klub/uredi", "Unit | Route | klubs/klub/uredi", {
  // Specify the other units that are required for this test.
  needs: ["service:scheduler", "service:router-scroll"]
});

test("it exists", function(assert) {
  var route = this.subject();
  assert.ok(route);
});
