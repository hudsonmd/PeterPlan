angular.module('app').controller('LoginController', function($scope, $state){

	$scope.login = function(){
		$state.go('app.todo');
	}
});