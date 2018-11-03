import { findAll, find, visit } from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | obcina page", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("should list categories with klubs", function(assert) {
    assert.expect(0);
    // assert.expect(2);
    // let klub1 = this.server.create("klub", { categories: ["fitnes"] });
    // let klub2 = this.server.create("klub", { categories: ["karate"] });
    // let klub3 = this.server.create("klub", { categories: ["karate"] });
    // let obcina = this.server.create("obcina", { klubs: [klub1, klub2, klub3] });
    // visit(`/obcina/${obcina.id}`);
    // andThen(function() {
    //   assert.equal(currentURL(), `/obcina/${obcina.id}`);
    //   assert.ok(find("article h1").text().includes(obcina.name));
    //   // TODO: complete test
    //   // return pauseTest();
    //   // In total there are 3 klubs
    //   // assert.equal(find(".klub-list .js-klub-card").length, 3);
    //   // assert.equal(
    //   //   find(".js-klub-list-section").length,
    //   //   2,
    //   //   "There should be exactly 2 sections"
    //   // );
    //   // assert.equal(
    //   //   find(".js-klub-list-section")[0].find(".js-klub-card").length,
    //   //   1
    //   // );
    //   // assert.equal(
    //   //   find(".js-klub-list-section")[1].find(".js-klub-card").length,
    //   //   2
    //   // );
    //   // TODO: each section has link to map
    // });
  });

  test("when category has too many klubs, link to obcina-category page", function(assert) {
    assert.expect(0);
  });

  test("shows appropriate message when no klubs", async function(assert) {
    assert.expect(2);
    let obcina = this.server.create("obcina", { klubs: [] });

    await visit(`/obcina/${obcina.id}`);

    assert.ok(find("article h1").textContent.includes(obcina.name));
    assert.ok(find(".js-no-klubs-notif"));
  });

  test("it includes a list of neighboring obcinas", async function(assert) {
    assert.expect(1);

    let obcina1 = this.server.create("obcina", { klubs: [] });
    let obcina2 = this.server.create("obcina", { klubs: [] });
    let obcina3 = this.server.create("obcina", {
      klubs: [],
      neighbouringObcinas: [obcina1, obcina2]
    });

    await visit(`/obcina/${obcina3.id}`);

    assert.equal(findAll(".js-neighbouring-obcina-link").length, 2);
  });

  test("should include 'Registriraj klub' button", async function(assert) {
    assert.expect(1);

    let obcina = this.server.create("obcina", { klubs: [] });

    await visit(`/obcina/${obcina.id}`);

    assert.ok(
      find(".js-add-klub-btn").textContent.includes("Registriraj klub")
    );
  });
});
