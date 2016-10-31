angular.module('alurapic').controller('ImageController', function($scope, $http,$routeParams){
    
    $scope.image = {};
    $scope.mensagem = '';

    if($routeParams.imageId){
     $http.get('v1/fotos/'+ $routeParams.imageId)
     .success(function(result){
          $scope.image = result;
     })
     .error(function(error) {
         console.log(error);
         $scope.mensagem = 'Não foi possivel obter foto';
     })
    }
 
    $scope.sub  = function(){
        if($scope.form.$valid){
            if($scope.image._id){
                  $http.put('v1/fotos/'+ $scope.image._id, $scope.image)

                  .success(function(result){
                     $scope.mensagem = "foto alterada com sucesso";
                    }).error(function(error){
                        $scope.mensagem = "não foi possivel alterar a foto";
                    });
            }else{
                $http.post('v1/fotos', $scope.image)
                .success(function(result){
                    $scope.image = {};
                    $scope.mensagem = "foto incluida com sucesso";
                }).error(function(error){
                    $scope.mensagem = "não foi possivel incluir a foto";
                });
            }
        };
    };
});