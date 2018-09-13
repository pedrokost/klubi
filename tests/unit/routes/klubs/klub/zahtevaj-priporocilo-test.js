import { moduleFor, test } from "ember-qunit";

moduleFor(
    "route:klubs/klub/zahtevaj-priporocilo",
    "Unit | Route | klubs/klub/zahtevaj priporocilo",
    {
        // Specify the other units that are required for this test.
        // needs: ['controller:foo']
        needs: ["service:scheduler", "service:router-scroll", "service:flashMessages"]
    }
);

test("it exists", function(assert) {
    let route = this.subject();
    assert.ok(route);
});
