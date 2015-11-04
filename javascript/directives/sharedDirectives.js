app.directive('bananabelHeader', function() {
            return {
                  restrict: 'E',
                  templateUrl: 'javascript/templates/header.html',
                  controller: 'headerController'
            };
       });

app.directive('bananabelFooter', function() {
	return {
		restrict: 'E',
		templateUrl: 'javascript/templates/footer.html'
	};
});