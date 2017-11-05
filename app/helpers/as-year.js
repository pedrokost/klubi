import { helper } from '@ember/component/helper';

export function asYear(date) {
  return moment(date[0]).format("YYYY");
}

export default helper(asYear);
