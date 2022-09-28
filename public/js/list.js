
angular.module('userlist', [])
.controller('userlistController', ['$scope', '$filter', function($scope, $filter) {
  var orderBy = $filter('orderBy');
  $scope.users = [
    { fname: 'John K', lname: 'Smith', address: 'Street # 22, NY, USA', email: 'john@gmail.com', contact: '555-1212', age: 28, role: 'Admin' },
    { fname: 'Mary K', lname: 'Bill', address: 'Home # 55/A, CA, USA', email: 'mary@gmail.com', contact: '555-9876', age: 32, role: 'Manager' },
    { fname: 'Mike Z', lname: 'Herbey', address: 'Flat # 65/C, NY, USA', email: 'mike@yahoo.com', contact: '555-4321', age: 35, role: 'Accountant' },
    { fname: 'Adam P', lname: 'H.Smith', address: 'Street # 212/D, AD, USA', email: 'adam@gmail.com', contact: '555-5678',  age: 27, role: 'Executive' },
    { fname: 'John L', lname: 'Smith', address: 'Street # 22, NY, USA', email: 'john@gmail.com', contact: '555-1212', age: 28, role: 'Admin' },
    { fname: 'Mary L', lname: 'Bill', address: 'Home # 55/A, CA, USA', email: 'mary@gmail.com', contact: '555-9876', age: 32, role: 'Manager' },
    { fname: 'Mike W', lname: 'Herbey', address: 'Flat # 65/C, NY, USA', email: 'mike@yahoo.com', contact: '555-4321', age: 35, role: 'Accountant' },
    { fname: 'Adam D', lname: 'H.Smith', address: 'Street # 212/D, AD, USA', email: 'adam@gmail.com', contact: '555-5678',  age: 27, role: 'Executive' },
    { fname: 'Julie J', lname: 'Aderson', address: 'Street # 333/B, NY, USA', email: 'julie@yahoo.com', contact: '555-8765', age: 29, role: 'Executive' },
    { fname: 'Adam M', lname: 'H.Smith', address: 'Street # 212/D, AD, USA', email: 'adam@gmail.com', contact: '555-5678',  age: 27, role: 'Executive' },
    { fname: 'Julie R', lname: 'Aderson', address: 'Street # 333/B, NY, USA', email: 'julie@yahoo.com', contact: '555-8765', age: 29, role: 'Executive' },
    { fname: 'Adam S', lname: 'H.Smith', address: 'Street # 212/D, AD, USA', email: 'adam@gmail.com', contact: '555-5678',  age: 27, role: 'Executive' },
    { fname: 'Md Saiful', lname: 'Islam', address: 'Street # 669/C, Dhaka, Bangladesh', email: 'saif89@gmail.com', contact: '555-8765', age: 28, role: 'Admin' }
  ];
  $scope.order = function(predicate, reverse) {
    $scope.users = orderBy($scope.users, predicate, reverse);
  };
  $scope.order('-age',false);
  
}]);
