angular.module('app',[])
.value('realname','zhouli')
.value('realname','wangwu') 
//变量是可以改变的 
.constant('http',"www.baidu.com")
.constant('http',"www.souhu.com")
 //常量是不能改变的额，常量可以用来做配置文件
 

.controller('MyCtrl',function($scope,realname,http){
	$scope.msg = "你好";
	$scope.realname = realname;
	$scope.http=http;
})


