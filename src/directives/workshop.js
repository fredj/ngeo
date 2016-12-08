goog.provide('ngeo.workshop');

goog.require('ngeo.filters');
goog.require('ngeo.Popup');


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


ngeo.WorkshopController = function(ngeoCreatePopup) {

  this.popup = ngeoCreatePopup();

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

  this.popup.setTitle('Recenter');
  this.popup.setContent('Recentered to: ' + coordinate.join(','), true);
  this.popup.setOpen(true);
};

ngeo.module.controller('ngeoWorkshopController', ngeo.WorkshopController);
