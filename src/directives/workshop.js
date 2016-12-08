goog.provide('ngeo.workshop');


ngeo.workshopDirective = function() {
  return {
    templateUrl: ngeo.baseTemplateUrl + '/workshop.html'
  };
};

ngeo.module.directive('ngeoWorkshop', ngeo.workshopDirective);
