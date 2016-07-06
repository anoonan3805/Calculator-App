/*global angular*/
angular.module('starter', [])
    .controller('CalculatorController', function($scope) {
        $scope.display = 0;
        var memory = [];
        var operand = 0;

        $scope.clear = function() {
            $scope.display = 0;
            operand;
            memory[0];
        };

        $scope.clicked = function(label) {
            if ($scope.display == '0')
                $scope.display = [label];
            else $scope.display.push(label);
        };

        /*$scope.clicked = function(label) {
            // TODO: Append the label to the display
            $scope.display = label;
            //alert('clicked: ' + label);
        };*/

        $scope.equals = function() {
    var result = eval($scope.display.join(''));
    $scope.display = [result];
};
    });      
       /* $scope.equals = function() {
            var equation = $scope.display;
            var result = calculator.calculate(equation);
            $scope.display = result;
        };*/

/*.factory('calculator', function() {
    var calculate = function(equation) {
        var parser = new Epsilon.ExpressionParser(equation);
        return parser.evaluate();
    };
 
    return {
        calculator: calculate
    };*/
