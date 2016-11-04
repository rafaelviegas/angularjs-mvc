angular.module('myServices',['ngResource'])
    .factory('resourceImage',function($resource){

       return $resource('v1/fotos/:imageId', null,{
        update : {
            method: 'PUT'
        }
        });
    })
    .factory('registerImage',function(resourceImage,$q,$rootScope){
        var service = {};
        service.register = function(image){
        
            return $q(function(resolve,reject){
                if(image._id){
                    resourceImage.update({imageId:image._id},image,function(){
                        $rootScope.$broadcast('imageRegistered');
                        resolve({
                           message: 'Imagem ' + image.titulo  + ' atualizada com sucesso!',
                           insert:false 
                        });
                    },function(error){
                        console.log(error);
                        reject({ message: 'Não foi possivel alterar a foto '+image.titulo})
                    });
                }else{
                    resourceImage.save(image,function(){
                        $rootScope.$broadcast('imageRegistered');
                        resolve({
                            message: 'Foto '+ image.titulo + ' incluída com sucesso!',
                            insert: true
                        });
                        },function(error){
                             console.log(error);
                             reject({message:'Não foi possivel incluir a foto '+image.titulo}); 
                    });
                }   
            });
        };
        return service;
    });