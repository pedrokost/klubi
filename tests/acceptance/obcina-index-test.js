import { currentURL, visit, pauseTest } from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | obcina index", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /obcina should redirect to home", async function(assert) {
    await visit("/obcina");

    assert.equal(currentURL(), "/fitnes");
  });
});
