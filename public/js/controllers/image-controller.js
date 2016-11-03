angular.module('alurapic').controller('ImageController', function($scope, $http,resourceImage,registerImage,$routeParams){
    
    $scope.image = {};
    $scope.mensagem = '';

    if($routeParams.imageId){
     resourceImage.get({imageId: $routeParams.imageId},function(result){
         $scope.image = result;
     },function(error) {
         console.log(error);
         $scope.mensagem = 'Não foi possivel obter foto';
     })
    }
 
    $scope.sub  = function(){
        if($scope.form.$valid){
            registerImage.register($scope.image)
            .then(function(data){
                $scope.mensagem = data.message;
                if(data.insert)  $scope.image = {};
            }).catch(function(data){
                    $scope.mensagem = data.message;
            }); 
        };
    };
});