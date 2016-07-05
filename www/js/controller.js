angular.module('starter')
    .controller('CalculatorController', function($scope) {
        $scope.clear = function() {
            // TODO: Clear the display
            $scope.display = "";
            //alert('Clear!');
        };

        $scope.clicked = function(label) {
            // TODO: Append the label to the display
            $scope.display = label;
            //alert('clicked: ' + label);
        };

        $scope.equals = function() {
            // TODO: Calculate  & set the display to the result.
            $scope.display = "";
            //alert('Equals!');
        };
    });