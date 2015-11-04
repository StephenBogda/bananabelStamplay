var app = angular.module('bananabelApp',  [
	'ngStamplay', 
	'ui.router', 
	'app.routes', 
	'app.admin',
	'app.checkout',
	'app.dashboard',
	'app.package',
	'app.authenticate',
	'app.header',
	'app.profile',
	'UserService',
	'ngAnimate', 
	'ngFileUpload'])

	.controller('MainController', ['User', '$rootScope', MainController]);



	function MainController(User, $rootScope, $q, $state) {
	    var main = this;
	    main.logout = logout;

	      $rootScope.currentUser = {}; // creating this object to hold our current users info

	      	// get the current user and bind their data to rootScope.currentUser object
	      	User.getCurrent()
	      		.then(function(data) {
	      			if (data.get('_id')) {
	      				$rootScope.currentUser.id    = data.get('_id');
	      				$rootScope.currentUser.name  = data.get('displayName');
	      				$rootScope.currentUser.image = data.get('profileImg');
	      			} else {
	      				// clear the current user just to be sure
	      				$rootScope.currentUser = {};
	      			}
	      		}); 

	     function logout() {
	         User.logout();
	         $rootScope.currentUser = {};
	       }  
	} 

