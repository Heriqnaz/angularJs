'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
  'myApp.listUsers',
  'myApp.messageUser'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/'});
}])
    .controller('mainCtrl', function ($scope) {
      $scope.$on("openMessage", function(event, data) {
        $scope.data = data;
        $scope.$broadcast("changeData", $scope.data);
      });
      $scope.$on("sendMessage", function(event, data) {
        $scope.$broadcast("changeMessageDate", data);
      });
    });