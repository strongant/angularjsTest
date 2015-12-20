angular.module('app',[])
.controller('AddessCtrl',function($scope){
	$scope.list = [
		{id:1,address:'莲花小区'},
		{id:2,address:'建设小区'},
		{id:3,address:'故宫'},
		{id:4,address:'北京鸟巢'}
	];
})