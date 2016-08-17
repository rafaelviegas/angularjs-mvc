angular.module('alurapic').controller('ImagesController', function($scope, $http){
	
	$scope.images = [];
	$scope.search = '';
	
	$http.get('v1/fotos').success(function(result){
		$scope.images = result;
	}).error(function(error){
			console.log(error);
	});

});