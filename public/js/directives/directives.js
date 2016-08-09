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

});