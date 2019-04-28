'use strict';

angular.module('myApp.listUsers', ['ngMaterial'])
.controller('listUserCtrl', function ($scope) {
  $scope.users = [
    {
      id: 1,
      name: 'Ani Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/boy-looking-over-his-shoulder-monaragala-sri-lanka-69310-800x534.jpg',
      email: 'Ani@ddd.t',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 2,
      name: 'Karine Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/child-nutrition_720_1.jpg',
      email: 'Karine@ggg.ii',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 3,
      name: 'Susan Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/images.jpeg',
      email: 'sdsshy@wqs',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 4,
      name: 'Arthur Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/iStock-519624386-900x600-1.jpg',
      email: 'sdsdf@fsdf',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 5,
      name: 'Mariam Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/images.jpeg',
      email: 'heriqnazsim@gmail.com',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 6,
      name: 'Ashot Araqelyan',
      bithDay: '01.03.1990',
      img: '',
      email: 'heriqnazsim@gmail.com',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 7,
      name: 'Nerses Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/iStock-519624386-900x600-1.jpg',
      email: 'heriqnazsim@gmail.com',
      notes: ["Hi ashdaksjdashdga"]
    },
    {
      id: 8,
      name: 'Sayat Araqelyan',
      bithDay: '01.03.1990',
      img: '/img/images.jpeg',
      email: 'heriqnazsim@gmail.com',
      notes: ["Hi ashdaksjdashdga"]
    }
  ];
  $scope.openMessage = function(item) {
    $scope.$emit('openMessage', item);
  };
  $scope.$on("changeMessageDate", function(event, data) {
    var found = $scope.users.find(function(element) {
      return element.id === data.id;
    });
    found.notes.push(data.message);
    $scope.$emit('openMessage', found);
  });
  this.$onInit = function () {
    $scope.$emit('openMessage', $scope.users[0]);
  };
})
.directive('listUserDir', function () {
  return {
    templateUrl: '../html/messageUsers'
  };
});