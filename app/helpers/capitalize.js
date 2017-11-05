import { helper } from '@ember/component/helper';

export function capitalize(str/*, hash*/) {
  if (str[0]) {
    return str[0][0].toUpperCase() + str[0].slice(1);
  } else {
    return str[0];
  }
}

export default helper(capitalize);
