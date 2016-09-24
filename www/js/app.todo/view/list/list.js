angular.module('app.toDo').controller('ToDoListController', function($scope, $state, toDoFactory){
	$scope.toDoList = toDoFactory.getToDoList();

	$scope.addToDo = function(){
		$state.go('app.toDoNew');
	};

	$scope.goToDetail = function(toDo){
		$state.go('app.toDoDetail', {'id' : toDo.$id});
	}
});