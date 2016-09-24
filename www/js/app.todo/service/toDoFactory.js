angular.module('app.toDo').factory('toDoFactory', function($firebaseArray, $firebaseObject){

// relevant urls for firebase db
/*
  var config = {
    apiKey: " AIzaSyDXCRADT8wa8kjH-bwWMZCIEAljjwh4fxM",
    authDomain: "AIzaSyDXCRADT8wa8kjH-bwWMZCIEAljjwh4fxM.firebaseapp.com",
    databaseURL: "https://peterplan-2d29f.firebaseio.com/",
    storageBucket: "gs://peterplan-2d29f.appspot.com"
  };
  */


	var toDos;

	var factory = {};

	var saveChanges = function(){
		localStorage.toDos = JSON.stringify(toDos);
	};
	
	factory.getToDoList = function(){
		var itemsRef = new Firebase("https://peterplan-2d29f.firebaseio.com/todos");
  		toDos = $firebaseArray(itemsRef);
  		return toDos;
	}

	factory.getToDo = function(id){
		var itemsRef = new Firebase("https://peterplan-2d29f.firebaseio.com/todos/"+id);
  		return $firebaseObject(itemsRef);
	}

	factory.addToDo = function(newToDo){
		toDos.$add(newToDo);
	}


	return factory;
});