/*
 * @Author: Pedro Kostelec
 * @Date:   2018-12-15 17:43:52
 * @Last Modified by:   Pedro Kostelec
 * @Last Modified time: 2018-12-15 17:43:58
 */

import RSVP from "rsvp";

export function initialize(appInstance) {
  let rollbarService = appInstance.lookup("service:rollbar");

  RSVP.on("error", function(reason) {
    rollbarService.error(reason);
  });
}

export default {
  name: "rsvp-error-handler",
  initialize
};
