import { test } from "qunit";
import moduleForAcceptance from "klubi/tests/helpers/module-for-acceptance";

moduleForAcceptance("Acceptance | zahtevaj priporocilo");

test("single user request", function(assert) {
  assert.expect(2);
  let klub = server.create("klub", { categories: ["football"] });
  visit(`/football/${klub.id}/zahtevaj-priporocilo`);

  fillIn(".priporocilo-modal .js-zahtevaj-ime", "Andrej Bajuk");
  fillIn(".priporocilo-modal .js-zahtevaj-email", "andrej@bajuk.si");
  fillIn(".priporocilo-modal .js-zahtevaj-tvoje-ime", "Moje ime");
  fillIn(".priporocilo-modal .js-zahtevaj-tvoj-email", "moje@ime.si");
  click(".priporocilo-modal button");

  andThen(function() {
    assert.equal(currentURL(), `/football/${klub.id}`);
    assert.ok(
      find(".alert")
        .text()
        .includes("upešno si poslal/a zahetvke za priporočilo")
    );
  });
});

test("adding and removing recipients", function(assert) {
  assert.expect(1);
  let klub = server.create("klub", { categories: ["football"] });
  visit(`/football/${klub.id}/zahtevaj-priporocilo`);

  fillIn(".priporocilo-modal .js-zahtevaj-ime", "Andrej Bajuk");
  fillIn(".priporocilo-modal .js-zahtevaj-email", "andrej@bajuk.si");
  fillIn(".priporocilo-modal .js-zahtevaj-tvoje-ime", "Moje ime");
  fillIn(".priporocilo-modal .js-zahtevaj-tvoj-email", "moje@ime.si");
  click(".zahtevaj-priporocilo-add-button");
  fillIn(".priporocilo-modal .js-zahtevaj-ime:last", "Drugi");
  fillIn(".priporocilo-modal .js-zahtevaj-email:last", "drugi@pampa.si");
  click(".zahtevaj-priporocilo-add-button");
  fillIn(".priporocilo-modal .js-zahtevaj-ime:last", "Tretji");
  fillIn(".priporocilo-modal .js-zahtevaj-email:last", "Tretji@pampa.si");
  click(".zahtevaj-priporocilo-remove-button:last");
  click(".priporocilo-modal button");

  andThen(function() {
    assert.equal(currentURL(), `/football/${klub.id}`);
    // assert.ok(
    //   find(".alert")
    //     .text()
    //     .includes("Uspešno si poslal/a zahetvke za priporočilo")
    // );
  });
});

