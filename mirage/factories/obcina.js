import { Factory, association } from "ember-cli-mirage";

export default Factory.extend({
  name(i) {
    return `Obcina ${i}`;
  },
  geom: "MULTIPOLYGON (((14.129574402251414 45.86945041498568)))"
});
