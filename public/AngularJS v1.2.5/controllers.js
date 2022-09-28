var SalesApp = angular.module("SalesApp", []);
SalesApp.controller("ProductCtrl", function($scope,$http) {
	/*
$scope.customers = [{'BillTo':$scope.BillTo, 
						'Email': $scope.Email, 
							'phone':$scope.phone, 
								'Address':$scope.Address, 
									'CustomerType': $scope.CustomerType, 
									'PaymentType':$scope.PaymentType
					}];
*/
$scope.products = [];
//$scope.sl = 1;
$scope.addRow = function(){
	$scope.products.push({ 
		//'sl':$scope.sl, 
		'id': $scope.id, 
		'name':$scope.name,
		'description':$scope.description, 
		'quantity': $scope.quantity, 
		'price':$scope.price, 
		'amount':$scope.amount
		});
	$scope.sl=$scope.sl+1;
	$scope.id='';
	$scope.name='';
	$scope.description='';
	$scope.quantity='';
	$scope.price='';
	$scope.amount='';
};
$scope.removeRow = function(id){
		var index = -1;		
		var comArr = eval( $scope.products );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].id === id ) {
				index = i;
				break;
			}
		}
		if( index === null ) {
			alert( "Something gone wrong" );
		}
		$scope.products.splice( index, 1 );
		//$scope.sl=$scope.sl-1;
	};

//$scope.quantity = 0;
//$scope.price = 0;
$scope.updateAmount = function () {
	   $scope.amount = $scope.quantity * $scope.price;
};
$scope.getTotal = function(){
	var total = 0;
	for(var count=0; count < $scope.products.length;count++){
		total += $scope.products[count].price * $scope.products[count].quantity;
	}
	return total;
};

$scope.getProduct = function(){
	$http.get("http://localhost:8080/Application_1/Home/Sales/productselection.jsp?ProductID="+$scope.id)
	.success(function(response) {
		$scope.Product = response;
		$scope.name=$scope.Product.ProductName;
		$scope.description=$scope.Product.Description;
		$scope.price=$scope.Product.Price;
	}).error(function() {
		$scope.response = "You enter a wrong ID !";
		alert( $scope.response );
	});
};

$scope.result = 'hidden'
$scope.resultMessage;
$scope.customer; //formData is an object holding the name, email, subject, and message
$scope.submitButtonDisabled = false;
$scope.submitted = false; //used so that form errors are shown only after the form has been submitted
$scope.submit = function(sales) {
	//alert($scope.customer);
    $scope.submitted = true;
    $scope.submitButtonDisabled = true;
    if (sales.$valid) {
        $http({
            method  : 'POST',
            url     : 'test.jsp',
            //dataType: 'json',
            data    : //$.param($scope.customer,$scope.products),  //param method from jQuery
			            {
			            	customer: $scope.customer,
			            	products: $scope.products
			            },
            //headers : { 'Content-Type': 'application/json' }  //set the headers so angular passing info as form data (not request payload)
        })//$http.post('saledb.jsp',$scope.customers,$scope.products)
    		.success(function(data){
            console.log(data);
            if (data.success) { //success comes from the return json object
                $scope.submitButtonDisabled = true;
                $scope.resultMessage = 'Success!';
                $scope.result='bg-success';
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Failed!';
                $scope.result='bg-danger';
            }
        });
    } else {
        $scope.submitButtonDisabled = false;
        $scope.resultMessage = 'Failed :(  Please fill out all the fields.)';
        $scope.result='bg-danger';
    }
};

$scope.resetAll = function() {
    $scope.$broadcast('show-errors-reset');
    $scope.sales = {CustomerType: '', phone: '', BillTo: '', Email: '', PaymentType: '', Address:'' };
    $scope.products = [];
  };

});
