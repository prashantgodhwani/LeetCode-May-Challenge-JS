/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {

    /*******************
     * Initial Solution
     *******************/

    //         var a = n - 2;
    //         var firstBad = -1;
    //          while(isBadVersion(a)){
    //              a = a-2;
    //          }
    //          if(isBadVersion(a + 1)) return a+1;
    //          else return a+2;
    //         };
    return findFirstBad(1, n);
  }

  /*******************
   * Final Solution - Binary Search
   *******************/
  let mid;

  function findFirstBad(a, n) {
    if ((n - a) < 2)
      if (isBadVersion(a)) return a;
      else return n;
    else {
      mid = Math.ceil((n + a) / 2);
      if (!isBadVersion(mid)) return findFirstBad(mid, n);
      else return findFirstBad(a, mid);
    }
  }
};