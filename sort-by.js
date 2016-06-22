var _ = require("lodash");

//working version 1
  //  var worker = function(collection) {
  //     return _.sortBy(collection, 'quantity').reverse();
  //  };


//working version 2
   var worker = function(collection) {
      return _.sortBy(collection, itemQuantity);
   };

   function itemQuantity(item){
     return -item.quantity;
   }

module.exports = worker;
