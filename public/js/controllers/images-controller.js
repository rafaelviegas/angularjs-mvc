angular.module('alurapic').controller('ImagesController', function($scope, $http){
	
	$scope.images = [];
	$scope.mensagem = '';
	$scope.msg = '';
	$http.get('v1/fotos').success(function(result){
		$scope.images = result;
	}).error(function(error){
			console.log(error);
	});
	
	$scope.remove = function(image){
		$http.delete('v1/fotos/'+image._id)
		.success(function(result){
			$scope.images.splice($scope.images.indexOf(image),1);
			$scope.mensagem = 'Foto ' + image.titulo + ' foi removida com sucesso.';
		})
		.error(function(error){
			$scope.mensagem = 'Não foi possivel reniver a foto '+ image.titulo;
			console.log(error);
		});
	};

});