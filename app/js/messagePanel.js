'use strict';

angular.module('myApp.messageUser', ['ngMaterial'])
    .controller('messageCtrl', function ($scope) {
      $scope.$on("changeData", function(event, data) {
        $scope.data = data;
      });
      $scope.message = '';
      $scope.sendMessage = function () {
        $scope.$emit('sendMessage', {message: $scope.message, id: $scope.data.id});
        $scope.message = ' ';
      };
    })
    .directive('messageDir', function () {
      return {
        templateUrl: '../html/messagePanel'
      };
    });