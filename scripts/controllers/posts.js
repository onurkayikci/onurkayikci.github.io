'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post){
	if($location.path() === '/')
	{
		$scope.posts=Post.all;  
		//show all posts only on the main page, otherwise
		//only the ones of the user
	}
	$scope.post = {url: 'http://', title : ''};

	$scope.deletePost = function(postId){
		Post.delete(postId);
	};
});