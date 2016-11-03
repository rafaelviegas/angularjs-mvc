angular.module('alurapic').controller('ImagesController', function($scope, resourceImage){
	
	$scope.images = [];
	$scope.mensagem = '';
	$scope.msg = '';

	
	resourceImage.query(function(images){
		$scope.images = images;
	}, function(error){
		console.log(error);
	});
	
	$scope.remove = function(image){
		resourceImage.delete({imageId:image._id},function(){
			$scope.images.splice($scope.images.indexOf(image),1);
			$scope.mensagem = 'Foto ' + image.titulo + ' foi removida com sucesso.';
		},function(error){
			$scope.mensagem = 'Não foi possivel reniver a foto '+ image.titulo;
			console.log(error);
		})

	};

});