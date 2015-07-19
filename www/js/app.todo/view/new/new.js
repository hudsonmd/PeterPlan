angular.module('app.toDo').controller('ToDoNewController', function($scope, $ionicHistory, toDoFactory){

	
	$scope.newToDo = function(){
		var newToDo = {};
		newToDo.title = $scope.data.title;
		newToDo.description = $scope.data.description;
		newToDo.date = $scope.data.date;

		toDoFactory.addToDo(newToDo);

		$ionicHistory.goBack();
	}
});