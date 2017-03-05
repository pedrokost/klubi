import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('address-input-geocoder', 'Integration | Component | address input geocoder', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{address-input-geocoder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#address-input-geocoder}}
      template block text
    {{/address-input-geocoder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
