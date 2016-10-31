var app = angular.module('bookStore.books', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
				.when('/books', {
					templateUrl: 'books/books.html',
					controller: 'booksCtrl'
				})
				.when('/books/:id', {
					templateUrl: 'books/book-details.html',
					controller: 'bookDetailsCtrl'
				});
}]);

app.controller('booksCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('json/books.json').success(function(data){
		$scope.books = data;
	});
}]);

app.controller('bookDetailsCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
	$http.get('json/books.json').success(function(data){
		$scope.book = data[$routeParams.id];
	});
}]);