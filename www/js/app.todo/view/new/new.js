angular.module('app.toDo').controller('ToDoNewController', function($scope, $state,toDoList){

	var toDos = JSON.parse(toDoList);
	
	$scope.newToDo = function(){
		var newToDo = {};
		newToDo.title = $scope.data.title;
		newToDo.description = $scope.data.description;
		newToDo.date = $scope.data.date;

		if(toDos){
			toDos.push(newToDo);
		}
		else{
			toDos = [newToDo];
		}

		localStorage.toDos = JSON.stringify(toDos);

		$state.go('app.toDoList');
	}
});