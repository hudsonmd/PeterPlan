angular.module('app.toDo').controller('ToDoListController', function($scope, $state, toDoList){
	$scope.toDoList = toDoList;

	$scope.addToDo = function(){
		$state.go('app.toDoNew');
	};

	$scope.goToDetail = function(index){
		$state.go('app.toDoDetail', {'id' : index});
	}
});