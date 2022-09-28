var SalesApp = angular.module("SalesApp", []);
SalesApp.controller("ProductCtrl", function($scope,$http) {

$scope.CustomerType=['New','Regular','Weekend','Monthly','Sometimes'];
$scope.PaymentType=['Cash','VisaCard','MasterCard','Paypal','bKash'];

$scope.products = [];

$scope.addRow = function(){
	$scope.products.push({ 
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
	};

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
	$http.get("/Sales/productselection.jsp?ProductID="+$scope.id)
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
            data    : {
			            customer: $scope.customer,
			            products: $scope.products
			          },
        })
    		.success(function(data){
            console.log(data);
            if (data.success) {
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