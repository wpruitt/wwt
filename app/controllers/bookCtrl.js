"use strict";

app.controller("bookCtrl", function($scope, bookFactory){
	bookFactory.getBooks()
	.then(function(itemObject){
		var prices = [];
		$scope.books = itemObject;
		itemObject.forEach(function(book){
			prices.push(book.price.toFixed(2));
		});
		console.log(prices);
		// $scope.prices = prices;
		// $scope.realBooks = [];
		// for(var i = 0; i < itemObject.length; i++){
		// 	$scope.realBooks[i] = {
		// 		"title": itemObject[i].title,
		// 		"type": itemObject[i].type,
		// 		"price": prices[i]
		// 	};
		// }
	});
});