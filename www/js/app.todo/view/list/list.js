angular.module('app.toDo').controller('ToDoListController', function($scope, $state, toDoList){
	$scope.toDoList = JSON.parse(toDoList);

	$scope.addToDo = function(){
		$state.go('app.toDoNew');
	};

});