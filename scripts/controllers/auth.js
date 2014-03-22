'use strict';

app.controller ('AuthCtrl', function($scope, $location, Auth, User){
	if(Auth.signedIn())
	{
		$location.path('/');
		console.log("user signed in");
	}

	$scope.$on('firebaseSimpleLogin:login', function(){
		$location.path('/');
	});

	$scope.login = function (){
		Auth.login($scope.user).then(function(){
			$location.path('/');
			console.log("user logged in");
		}, function (error){
			$scope.error = error.toString();
			console.log("logged in error");
		});
	};

	$scope.register = function (){
		Auth.register($scope.user).then(function(authUser){
			User.create(authUser, $scope.user.username);
			//console.log(authUser);
			$location.path('/');
		},function (error){
			$scope.error = error.toString();
			console.log("register error");
		});
	};
});