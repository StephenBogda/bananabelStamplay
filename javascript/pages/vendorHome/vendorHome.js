app.controller('vendorHomeCtrl', function($scope) {
});


app.controller('vendorTabsCtrl', function($scope, $location) {
  
}); 

app.directive('vendorHomeNav', function() {
	return {
		restrict: 'E',
		templateUrl: 'javascript/templates/pages/vendorHome/vendor-nav.html'
	};
});


app.controller('vendorTabsCtrl', function($scope, $location) {
  
});

app.controller('vendorAccountCtrl', function($scope) {
       // create a message to display in our view
       $scope.animateClass = 'animate-registration';
});

app.controller('vendorCtrl', function($scope) {
       // create a message to display in our view
       $scope.animateClass = 'animate-registration';
});