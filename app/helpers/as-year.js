import Ember from "ember";

export function asYear(date) {
  return moment(date[0]).format("YYYY");
}

export default Ember.Helper.helper(asYear);
