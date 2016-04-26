var module = angular.module('App', []);

module.controller('firstController', function($scope, $http) {
	$http.get('json.json').success(function(data) {
		$scope.mydata = data;
	});
});
