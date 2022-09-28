//defining module
var myapp = angular.module('myapp', []);

//create angular controller
myapp.controller('mainController', function ($scope, $window, $location) {
	
    $scope.usertypeList = [
	    { usertypeId: 1, Name: 'Administrator' },
	    { usertypeId: 2, Name: 'Manager' },
	    { usertypeId: 3, Name: 'Accountant' },
	    { usertypeId: 4, Name: 'Executive' }
    ];
    
    //$scope.dob = "12-02-2012";

    $scope.reset = function() {
	    //$scope.$broadcast('has-error-reset');
    	$scope.fname = "";
		$scope.lname = "";
		$scope.username = "";
		$scope.password = "";
		$scope.confirmPassword = "";
		$scope.contactno = "";
		$scope.email = "";
		$scope.address = "";
		$scope.gender = "";
		$scope.date = "";
		$scope.jdate = "";
		$scope.usertype = "";
		$scope.terms = "";
	  };
    $scope.reset();
    
    // function to submit the form after all validation has occurred			
    $scope.submitForm = function () {

        // Set the 'submitted' flag to true
        $scope.submitted = true;

        if ($scope.userForm.$valid) {
        	alert("User Successfully Created !");
		$scope.reset();
        }
        else {
            alert("Please correct errors!");
        }
    };
    //$scope.date = new Date(2013, 9, 22);
});


//creating custom directive

myapp.directive('ngCompare', function () {
    return {
        require: 'ngModel',
        link: function (scope, currentEl, attrs, ctrl) {
            var comparefield = document.getElementsByName(attrs.ngCompare)[0]; //getting first element
            compareEl = angular.element(comparefield);

            //current field key up
            currentEl.on('keyup', function () {
                if (compareEl.val() != "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });

            //Element to compare field key up
            compareEl.on('keyup', function () {
                if (currentEl.val() != "") {
                    var isMatch = currentEl.val() === compareEl.val();
                    ctrl.$setValidity('compare', isMatch);
                    scope.$digest();
                }
            });
        }
    }
});

