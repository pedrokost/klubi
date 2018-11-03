import {
  click,
  fillIn,
  currentURL,
  find,
  findAll,
  visit,
  pauseTest
} from "@ember/test-helpers";
import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | zahtevaj priporocilo", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("single user request", async function(assert) {
    assert.expect(2);
    let klub = this.server.create("klub", { categories: ["football"] });
    await visit(`/football/${klub.id}/zahtevaj-priporocilo`);

    await fillIn(".priporocilo-modal .js-zahtevaj-ime", "Andrej Bajuk");
    await fillIn(".priporocilo-modal .js-zahtevaj-email", "andrej@bajuk.si");
    await fillIn(".priporocilo-modal .js-zahtevaj-tvoje-ime", "Moje ime");
    await fillIn(".priporocilo-modal .js-zahtevaj-tvoj-email", "moje@ime.si");
    await click(".priporocilo-modal button");

    assert.equal(currentURL(), `/football/${klub.id}`);
    assert.ok(
      find(".alert").textContent.includes(
        "Odlično! Uspešno si poslal/a zahetvke za priporočilo!"
      )
    );
  });

  test("adding and removing recipients", async function(assert) {
    assert.expect(1);
    let klub = this.server.create("klub", { categories: ["football"] });
    await visit(`/football/${klub.id}/zahtevaj-priporocilo`);

    await fillIn(".priporocilo-modal .js-zahtevaj-ime", "Andrej Bajuk");
    await fillIn(".priporocilo-modal .js-zahtevaj-email", "andrej@bajuk.si");
    await fillIn(".priporocilo-modal .js-zahtevaj-tvoje-ime", "Moje ime");
    await fillIn(".priporocilo-modal .js-zahtevaj-tvoj-email", "moje@ime.si");
    await click(".zahtevaj-priporocilo-add-button");

    await fillIn(
      findAll(".priporocilo-modal .js-zahtevaj-ime").get("lastObject"),
      "Drugi"
    );
    await fillIn(
      findAll(".priporocilo-modal .js-zahtevaj-email").get("lastObject"),
      "drugi@pampa.si"
    );
    await click(".zahtevaj-priporocilo-add-button");
    await fillIn(
      findAll(".priporocilo-modal .js-zahtevaj-ime").get("lastObject"),
      "Tretji"
    );
    await fillIn(
      findAll(".priporocilo-modal .js-zahtevaj-email").get("lastObject"),
      "Tretji@pampa.si"
    );
    await click(
      findAll(".zahtevaj-priporocilo-remove-button").get("lastObject")
    );
    await click(".priporocilo-modal button");

    assert.equal(currentURL(), `/football/${klub.id}`);
    // assert.ok(
    //   find(".alert")
    //     .text()
    //     .includes("Uspešno si poslal/a zahetvke za priporočilo")
    // );
  });
});
