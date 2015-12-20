angular.module('app',[])
/*每个controller相当于c(controller)*/
//html为v
//model用于传递数据
//注意这里.controller最后一个函数结尾可以使用分号进行表示也可以不写分号，
//如果不是最后一个函数写了分号，则angularjs不能正确运行
//controller作用域只要是同一个controller中使用同一个变量不会发生冲突


.controller('myctrl',function($scope){
			$scope.msg = 'angularjs';
})
.controller('NextCtrl',function($scope){
			$scope.msg = 'hello,angularjs';
})
.controller('ThirdCtrl',function($scope){
			$scope.msg = 'hello,angularjs';
})
.controller('MyCtrl',function($scope){
	$scope.msg = 'angular,hello';
	$scope.reverse = function(){
		return $scope.msg.split("").reverse().join("");
	}
})
.controller('LoginCtrl',function($scope){
	$scope.msg = "";
	$scope.user = {uname:'',upwd:''};
	$scope.errormsg = "";
	$scope.login = function(){
		console.log($scope.user.uname);
		if($scope.user.uname=='a' && $scope.user.upwd=='1'){
			alert('登录成功');
		}else{
			$scope.errormsg  = '用户名或者密码不正确';
		}
	}
})

