var _ = require("lodash");

  var worker = function(collection) {

  var grouped = _.groupBy(collection, 'article');

  var mapped = _.map(grouped, function(array, key){
    return { article: parseInt(key), total_orders: reduction(array) }
  })

  function reduction(array){
    return _.reduce(array, function(sum, object){ return sum + object.quantity}, 0)
  }

  return mapped.reverse();
 }
 module.exports = worker;
