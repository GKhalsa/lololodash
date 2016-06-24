var _ = require("lodash");

var worker = function(object) {
  return _.template('Hello <%= name %> (logins: <%= login.length %>)')(object)
};

module.exports = worker;
