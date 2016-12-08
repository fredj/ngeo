goog.provide('ngeo.workshop');

goog.require('ngeo.filters');


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
  this.coordinates = [
    [730556, 5863720],
    [829500, 5933600],
    [950000, 6002000]
  ];
};


ngeo.WorkshopController.prototype.recenter = function(coordinate) {
  var view = this.map.getView();
  view.setCenter(coordinate);
  view.setZoom(10);
};

ngeo.module.controller('ngeoWorkshopController', ngeo.WorkshopController);
