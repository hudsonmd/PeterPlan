angular.module('app.toDo').controller('ToDoDetailController', function($scope, $state, toDo){
	$scope.toDo = toDo;

	$scope.addTodo = function(){
		return true;
	};
});