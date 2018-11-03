import { currentURL, visit } from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | root", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /root", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
  });
});
