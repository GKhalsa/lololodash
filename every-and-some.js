var _ = require("lodash");


var final = function(collection){
  var cities = {
    hot: [],
    warm: []
  }

  function tempCheck(temp){
    return temp > 19;
  }

  function hotCity(city){
    return _.every(city, tempCheck);
  }

  function warmCity(city){
    return _.some(city, tempCheck);
  }

  function sortedCities(collection){
    _.forEach(collection, function(city, cityName){
    debugger;
      if(hotCity(city)){
        cities.hot.push(cityName);
      } else if(warmCity(city)) {
        cities.warm.push(cityName);
      }
    });
  }
  sortedCities(collection);
  return cities;
};


module.exports = final;
