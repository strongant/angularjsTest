angular.module('app',[])
.controller('UserCtrl',function($scope){
	$scope.user = {
		isShowImg:true,
		showIcon:true,
		icon:"images/psb.jpg",
		uname:'',
		pwd:'',
		zw:'1',
		sex:'0',
		aihao:[1]
	};
	$scope.isChecked =  function(n){
		var isok  = false;
		for (var i=0;i<$scope.user.aihao.length;i++){
			if(n==$scope.user.aihao[i]){
				isok = true;
				break;
			}
		}
		return isok;
	};
	$scope.register=function(user){
		console.log(user);
	};
})