import { helper } from '@ember/component/helper';

export function capitalize(string) {
  return string[0].capitalize();
}

export default helper(capitalize);
