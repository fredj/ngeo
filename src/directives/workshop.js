goog.provide('ngeo.workshop');


ngeo.workshopDirective = function() {
  return {
    scope: {
      'map': '<'
    },
    bindToController: true,
    controller: 'ngeoWorkshopController as ctrl',
    templateUrl: ngeo.baseTemplateUrl + '/workshop.html'
  };
};

ngeo.module.directive('ngeoWorkshop', ngeo.workshopDirective);


ngeo.WorkshopController = function() {


};

ngeo.module.controller('ngeoWorkshopController', ngeo.WorkshopController);
