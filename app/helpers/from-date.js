import { helper } from '@ember/component/helper';

export function fromDate(date) {
  return moment(date[0]).fromNow();
}

export default helper(fromDate);
