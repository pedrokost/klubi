import {
  findAll,
  currentURL,
  find,
  visit,
  pauseTest
} from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | list category klubs of obcina", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("should list all klubs", async function(assert) {
    assert.expect(3);

    let klubs = this.server.createList("klub", 3, { categories: ["fitnes"] });

    let obcina = this.server.create("obcina", { klubs: klubs });

    await visit(`/obcina/${obcina.id}/fitnes`);

    assert.equal(currentURL(), `/obcina/${obcina.id}/fitnes`);
    assert.ok(find("article h1").textContent.includes(obcina.name));
    assert.equal(findAll(".klub-list .js-klub-card").length, 3);
  });

  test("should include 'Registriraj klub' button", async function(assert) {
    assert.expect(1);

    let obcina = this.server.create("obcina", { klubs: [] });

    await visit(`/obcina/${obcina.id}/fitnes`);

    assert.ok(
      find(".js-add-klub-btn").textContent.includes("Registriraj klub")
    );
  });

  test("it include other available categories", async function(assert) {
    assert.expect(1);

    let obcina = this.server.create("obcina", { klubs: [] });

    await visit(`/obcina/${obcina.id}/fitnes`);

    assert.equal(findAll(".js-category-card").length, 19);
  });

  test("it includes a list of neighboring obcinas", async function(assert) {
    assert.expect(1);

    let obcina1 = this.server.create("obcina", { klubs: [] });
    let obcina2 = this.server.create("obcina", { klubs: [] });
    let obcina3 = this.server.create("obcina", {
      klubs: [],
      neighbouringObcinas: [obcina1, obcina2]
    });

    await visit(`/obcina/${obcina3.id}/fitnes`);

    assert.equal(findAll(".js-neighbouring-obcina-link").length, 2);
  });
});
