'use strict';

/**
 * @ngdoc function
 * @name driveoutApp.controller:DepthCtrl
 * @description
 * # DepthCtrl
 * Controller of the driveoutApp
 */
angular.module('driveoutApp')
  .controller('DepthCtrl', function ($scope, items, parents, $log, $routeParams) {
    $scope.items = items.data;
    $scope.$parent.folders = angular.copy(parents.data).filter(function(d) {
      if(d.slug==$routeParams.sub)
        d.selected = true;
      if(d.type=='folder')
        return d;
    });

    // that is the selected folder
    //$cope.$parent.folder = 

    // filter stuffs
    $scope.$watch('routes', function(){ // get title
      $scope.$parent.page = angular.copy($scope.routes)
        .filter(function(d){ return d.slug==$routeParams.page })
        .pop();
      //$scope.$parent.page.depth 
      $log.info('routes loaded', $scope.page)
    })
  });
