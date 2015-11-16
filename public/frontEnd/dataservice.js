(function() {
	'use strict';
	
	angular
		.module('FixYourCityApp')
		.factory('dataservice', dataservice);
		
		dataservice.$inject = ['$http', '$resource', '$routeParams'];
		
	function dataservice($http, $resource, $routeParams){
		var service = {
			getCities : getCities,
			//getCity: getCity,
		}
		
		return service;
		
		function getCities(){
			return $resource("api/cities", {id: "@id"}, {
				getAll: {method: 'GET', params:{}, isArray:true },
				getCity: {method: 'GET', params:{id: $routeParams.id}, isArray:true}
			});
		}
		
		
		 /*function getCity(){
			console.log($routeParams.id);			
			return $resource("api/cities/:id", {id: "@id"}, {
				query: {method: 'GET', params:{id: $routeParams.id}, isArray:true}
			});
		}*/
		/*function getCity(){
			return $http.get("api/cities/" + $routeParams.id)
				.success (function(data, status, header, config){
                    return data;
                }).
                error (function(data, status, header, config){
                    console.log('Error:'+ status);
                });
		}*/
	}
})();