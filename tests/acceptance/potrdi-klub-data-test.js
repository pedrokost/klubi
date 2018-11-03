import { click, currentURL, find, visit, pauseTest } from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | potrdi klub data", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("Rejecting klub data", async function(assert) {
    assert.expect(1);
    let klub = this.server.create("klub", { categories: ["football"] });

    await visit(`/football/${klub.id}/potrdi/1234`);
    await click("button[data-test-no]");

    assert.equal(currentURL(), `/football/${klub.id}/uredi`);
  });

  test("Confirming klub data", async function(assert) {
    assert.expect(1);
    let klub = this.server.create("klub", { categories: ["football"] });

    await visit(`/football/${klub.id}/potrdi/1234`);
    // await pauseTest();
    await click("button[data-test-yes]");
    // await pauseTest();

    assert.equal(currentURL(), `/football/${klub.id}`);
    // assert.ok(
    //   find(".alert").textContent.includes(
    //     "Hvala, da ste preverili podatke o klubu"
    //   )
    // );
  });

  test("Confirmation code no longer valid", async function(assert) {
    assert.expect(2);
    let klub = this.server.create("klub", { categories: ["football"] });

    await visit(`/football/${klub.id}/potrdi/invalid-code`);
    await click("button[data-test-yes]");

    assert.ok(
      find(".alert.alert-error").textContent.includes(
        "Potrjevanje podatkov s to kodo ni več možno."
      )
    );
    assert.equal(currentURL(), `/football/${klub.id}`);
  });
});
