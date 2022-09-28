
var confirmation = angular.module('confirmation', ['ui.bootstrap']);

confirmation.controller('confirmationController', function($scope, $window, $location,$filter, $log) {

  $scope.fname = 'Md Saiful';
  $scope.lname = 'Islam';
  $scope.username = 'saif89';
  $scope.date = '01-January-1989';
  $scope.jdate = '01-January-2015';
  $scope.password = '1111Aa';
  $scope.address = '56/1, Baitul View Trade, Purana Paltan, Dhaka - 1000, Bangladesh';
  $scope.email = 'saif89@gmail.com';
  $scope.contactno = '0555-8765';
  $scope.age = 28;
  $scope.gender = 'Male';
  $scope.usertype = ['Administrator'];
  $scope.comments = '';
  
  $scope.submitForm = function () {

      // Set the 'submitted' flag to true
      $scope.submitted = true;

      if ($scope.users.$valid) {
      	alert("User Successfully Created !");
      }
      else {
          alert("Please correct errors!");
      }
  };
  
  $scope.confirm = function () {
	  
	  alert("Sending Ok !");
  };

  $scope.status = {
		  isopen: false
		  };

  $scope.toggled = function(open) {
	  $log.log('Dropdown is now: ', open);
	  };

  $scope.toggleDropdown = function($event) {
	  $event.preventDefault();
	  $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
      };
                
  $scope.selected = [{ value: "Administrator",checked:true}]
  
  $scope.mytabs = [
                   {
                       name: "Administrator",
                       values: [
                           { value: "Administrator",checked:true }
                       ]
                   },
                   {
                       name: "Manager",
                       values: [
                           { value: "Manager", checked: false }
                       ]
                   },
                   {
                       name: "Accountant",
                       values: [
                           { value: "Accountant", checked: false }
                       ]
                   },
                   {
                       name: "Executive",
                       values: [
                           { value: "Executive", checked: false }
                       ]
                   }
                          ]
  $scope.checkValues = function () {
	  $scope.selected = []
      angular.forEach($scope.mytabs, function (value, index) {
      var selectedItems = $filter('filter')(value.values, { checked: true });
      angular.forEach(selectedItems, function (value, index) {
      $scope.selected.push(value);
      });
   });
      console.log($scope.selected);
 };
  
});