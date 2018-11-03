import {
  click,
  fillIn,
  findAll,
  currentURL,
  find,
  visit
} from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | submit recommendation", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("should successfully submit a recommendation", async function(assert) {
    assert.expect(3);
    let klub = this.server.create("klub", { categories: ["football"] });

    await visit(`/football/${klub.id}/podaj-mnenje/1234`);
    await fillIn(".priporocilo-modal textarea", "My new comment");
    await fillIn(".priporocilo-modal input[type=text]", "Roberto");
    await click(".priporocilo-modal input[type=checkbox]");
    await click(".priporocilo-modal button");

    assert.equal(currentURL(), `/football/${klub.id}`);
    assert.ok(find(".alert").textContent.includes("komentar je objavljen"));
    assert.equal(findAll('p[itemprop="review"]').length, 1);
  });
});
