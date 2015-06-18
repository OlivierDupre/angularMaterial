'use strict';

angular.module('angularMaterial')
  .controller('MainCtrl', function ($scope) {
    

  }).controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log, $rootScope) {
    $scope.close = function () {
      $rootScope.isLockedOpen = false;
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };

    

  });
