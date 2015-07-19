
angular.module('app.toDo', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.toDoList', {
    url: '/toDo',
    templateUrl: 'js/app.toDo/view/list/list.html',
    controller : 'ToDoListController',
    cache: false,
    resolve : {
    	toDoList : function(){
    		return localStorage.toDos;
    	}
    }
  })
  .state('app.toDoDetail', {
  	url: '/detail/:id',
  	templateUrl : 'js/app.toDo/view/detail/detail.html',
  	controller : 'ToDoDetailController',
  	resolve : {
  		toDo : function($stateParams){
  			return localStorage.toDos[$stateParams.id];
  		}
  	}
  })
  .state('app.toDoNew', {
  	url : '/new',
  	templateUrl : 'js/app.toDo/view/new/new.html',
  	controller : 'ToDoNewController',
  	 resolve : {
    	toDoList : function(){
    		return localStorage.toDos;
    	}
    }
  });
});
