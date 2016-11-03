angular.module('myServices',['ngResource'])
    .factory('resourceImage',function($resource){

       return $resource('v1/fotos/:imageId', null,{
        update : {
            method: 'PUT'
        }
        });
    });