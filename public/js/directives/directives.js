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

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    });