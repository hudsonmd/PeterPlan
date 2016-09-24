angular.module('app.toDo').controller('ToDoDetailController', function($scope, $stateParams, toDoFactory){
	$scope.toDo = toDoFactory.getToDo($stateParams.id);

});