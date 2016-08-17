angular.module('alurapic').controller('ImageController', function($scope, $http){
    
    $scope.image = {};
    $scope.mensagem = '';

    $scope.sub  = function(){
        if($scope.form.$valid){
            $http.post('v1/fotos', $scope.image)
            .success(function(result){
            $scope.image = {};
            $scope.mensagem = "foto incluida com sucesso";

            }).error(function(error){
                 $scope.mensagem = "não foi possivel incluir a foto";
            });
        };
    };
});