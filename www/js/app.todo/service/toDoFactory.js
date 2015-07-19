angular.module('app.toDo').factory('toDoFactory', function(){
	var toDos = JSON.parse(localStorage.toDos)

	var factory = {};

	var saveChanges = function(){
		localStorage.toDos = JSON.stringify(toDos);
	};
	
	factory.getToDoList = function(){
		return toDos;
	}

	factory.getToDo = function(id){
		return toDos[id];
	}

	factory.addToDo = function(newToDo){
		if(toDos){
			toDos.push(newToDo);
		}
		else{
			toDos = [newToDo];
		}

		saveChanges();
	}

	factory.delToDo = function(id){
		toDos.splice(id,1);
		saveChanges();
	}


	return factory;
});