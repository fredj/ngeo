goog.provide('gmf.workshopDirective');

goog.require('ngeo.filters');

gmf.workshopDirective = function() {
  return {
    scope: {
      'map': '<'
    },
    bindToController: true,
    controller: 'gmfWorkshopController as ctrl',
    templateUrl: gmf.baseTemplateUrl + '/workshop.html'
  };
};

gmf.module.directive('gmfWorkshop', gmf.workshopDirective);


gmf.WorkshopController = function($scope, ngeoLocation) {

  this.value = ngeoLocation.getParam('workshop');

  this.messages = [];

  // listen to the 'ngeo-layertree-state' events
  $scope.$on('ngeo-layertree-state', function(event, tree, parent) {
    this.messages.push({
      tree: tree,
      name: tree.node.name,
      state: tree.getState()
    });
  }.bind(this));
};


gmf.WorkshopController.prototype.toggleTreeState = function(tree) {
  var state = tree.getState();
  if (state === 'on') {
    tree.setState('off');
  } else if (state === 'off') {
    tree.setState('on');
  }
};

gmf.module.controller('gmfWorkshopController', gmf.WorkshopController);
