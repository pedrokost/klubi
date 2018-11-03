/*
 * @Author: Pedro Kostelec
 * @Date:   2018-12-15 16:39:47
 * @Last Modified by:   Pedro Kostelec
 * @Last Modified time: 2018-12-15 16:40:08
 */

module.exports = function(env) {
  return {
    clientAllowedKeys: []
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    // failOnMissingKey: false,
  };
};
