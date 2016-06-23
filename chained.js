var _ = require("lodash");

var final = function(words){
  return _.chain(words)
  .map(function(word){
   return word.toUpperCase() + 'CHAINED';
  })
   .sortBy()
   .value()
}
module.exports = final
