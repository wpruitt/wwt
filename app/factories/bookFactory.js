"use strict";

app.factory("bookFactory", function ($q, $http){

	let getBooks = () =>{
		return $q((resolve, reject) => {
			$http.get('./data/guides.json')
			.then((itemObject) => {
				console.log("itemObject", itemObject);
				resolve(itemObject.data.guides);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};
	return{getBooks};
});
console.log("bookFactory");