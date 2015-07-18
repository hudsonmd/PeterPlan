
angular.module('app.todo', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app.todo', {
    url: '/todo',
    templateUrl: 'js/app.todo/view/todo/todo.html',
    controller : 'ToDoController'
  });
});
