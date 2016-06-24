var _ = require("lodash");

  var worker = function(freelancers) {
    var avgIncome = (_.reduce(freelancers, function(sum, object){return sum + object.income}, 0))/freelancers.length;

    var under = _.chain(freelancers).filter(underperform).sortBy('income');
    var over = _.chain(freelancers).filter(overperform).sortBy('income');

    function underperform(freelancer){
      return freelancer.income <= avgIncome
    }

    function overperform(freelancer){
      return freelancer.income > avgIncome
    }

    return {
      "average": avgIncome,
      "underperform": under,
      "overperform": over
    }

  };

module.exports = worker;
