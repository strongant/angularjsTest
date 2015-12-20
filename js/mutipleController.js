angular.module('app',[])
.factory('Data',function(){
	return {
		msg:'我来自Factory'
	}
})
.controller('FCtrl',function($scope,Data){
	$scope.data = Data;
})
.controller('SCtrl',function($scope,Data){
	$scope.data = Data;
})

