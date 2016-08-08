angular.module('alurapic').controller('ImageController', function($scope, $http){
	
	$scope.images = [];

	$http.get('v1/fotos').success(function(result){
		$scope.images = result;
	}).error(function(error){
			console.log(error);
	});

});