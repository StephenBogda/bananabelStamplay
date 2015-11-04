

angular
    .module('app.header', [])
    .controller('headerController', headerController);


  


function headerController ($scope) {
       // create a message to display in our view
       $scope.click = function(){
       		if ($scope.active === true) {
       			$scope.active = false;
       		}

       		if ($scope.active === false) {
       			$scope.active = true;
       		}
       }



       
   }