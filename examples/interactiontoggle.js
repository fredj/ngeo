goog.provide('interactiontoggle');

goog.require('go_decorateinteraction_service');
goog.require('go_map_directive');
goog.require('ol.FeatureOverlay');
goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.interaction.Draw');
goog.require('ol.layer.Tile');
goog.require('ol.source.MapQuest');

(function() {
  var module = angular.module('app', ['go']);

  module.controller('MainController', ['$scope', 'goDecorateInteraction',
    /**
     * @param {angular.Scope} $scope Scope.
     * @param {go.DecorateInteraction} goDecorateInteraction Decorate
     *     interaction service.
     */
    function($scope, goDecorateInteraction) {

      /** @type {ol.Map} */
      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
          })
        ],
        view: new ol.View({
          center: [-10997148, 4569099],
          zoom: 4
        })
      });
      $scope['map'] = map;

      var featureOverlay = new ol.FeatureOverlay();
      featureOverlay.setMap(map);

      /** @type {ol.interaction.Draw} */
      var interaction = new ol.interaction.Draw(
          /** @type {olx.interaction.DrawOptions} */ ({
            type: 'Point',
            features: featureOverlay.getFeatures()
          }));
      goDecorateInteraction(interaction, map);
      $scope['interaction'] = interaction;

    }]);
})();
