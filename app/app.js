'use strict';

// Declare app level module which depends on views, and components
angular.module('moviecat', [
  'ngRoute',
  'moviecat.detail',
  'moviecat.movie_list',
  'moviecat.directives.auto_focus',
  'moviecat.services.http'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
}]).controller('moviecat_search',function($scope,$route,$routeParams,HttpService){
	$scope.text = '';
	$scope.submit = function () {
		$route.updateParams({category:'search',q:$scope.text});
	}

});  //设置默认路由的页面渲染地址


// .controller('NavController', [
//   '$scope',
//   '$location',
//   function($scope, $location) {
//     $scope.$location = $location;
//     $scope.$watch('$location.path()', function(now) {
//       if (now.startsWith('/in_theaters')) {
//         $scope.type = 'in_theaters';
//       } else if (now.startsWith('/coming_soon')) {
//         $scope.type = 'coming_soon';
//       } else if (now.startsWith('/top250')) {
//         $scope.type = 'top250';
//       }
//       console.log($scope.type);
//     });
//   }
// ])
