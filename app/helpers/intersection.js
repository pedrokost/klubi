import Ember from 'ember';

export function intersection(unsortedA, unsortedB) {
  /* finds the intersection of
   * two arrays in a simple fashion.
   *
   * PARAMS
   *  a - first array, must already be sorted
   *  b - second array, must already be sorted
   *
   * NOTES
   *
   *  Should have O(n) operations, where n is
   *    n = MIN(a.length(), b.length())
   */

  const a = unsortedA.sort();
  const b = unsortedB.sort();

  let ai=0, bi=0;
  let result = [];

  while( ai < a.length && bi < b.length ){
    if      (a[ai] < b[bi] ){ ai++; }
    else if (a[ai] > b[bi] ){ bi++; }
    else /* they're equal */
    {
      result.push(a[ai]);
      ai++;
      bi++;
    }
  }

  return result;
}

export default Ember.Helper.helper(intersection);
