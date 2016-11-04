angular.module('myDirectives',[])
.directive('myPanel', function(){

	//Directive Definition Object
	var ddo = {};

	ddo.restrict = "AE";
	ddo.transclude = true;
	ddo.scope = {
		titulo: '@'
	};

	ddo.templateUrl = 'js/directives/my-panel.html'

	return ddo;

}).directive('myImage', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.templateUrl = 'js/directives/my-image.html'           
        
        return ddo;
}).directive('myDangerButton', function(){
    
    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        name: '@',
        action: '&'
    };

    ddo.template = '<button ng-click="action(image)" class="btn btn-danger btn-block">{{name}}</button>';

    return ddo;    
}).directive('myFocus', function(){
    var ddo = {}

    ddo.restrict = "A";

    ddo.link = function(scope, element){
      
        scope.$on('imageRegistered', function(){
            element[0].focus();
        });
    }
    return ddo;
});