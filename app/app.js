'use strict';

// Declare app level module which depends on views, and components
angular.module('bookStore', [
  'ngRoute',
  'bookStore.view1',
  'bookStore.view2',
  'bookStore.books'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/books'});
}]);
