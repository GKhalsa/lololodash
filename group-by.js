var _ = require("lodash");

var worker = function(comments) {
  var grouped = _.groupBy(comments, 'username');
  var processed = _.map(grouped, function(array, name){
    return {username: name, comment_count: _.size(array)}
  })

  return _.sortBy(processed, 'comment_count').reverse()

};

module.exports = worker;
