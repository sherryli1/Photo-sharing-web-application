'use strict';


cs142App.controller('UserDetailController', ['$scope', '$routeParams','$resource',
  function ($scope, $routeParams,$resource) {
    /*
     * Since the route is specified as '/users/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    $scope.curUser ={};
    console.log('UserDetail of ', userId);
    var User = $resource('/user/:id');
    var user = User.get({id:userId},function(){
        $scope.curUser = user;
        $scope.main.toolbarRight = user.first_name +" "+ user.last_name;
    });


    // $scope.curUser = window.cs142models.userModel(userId);
  //   console.log('UserDetail of ', userId);
  //   $scope.FetchModel('/user/'+userId,function(data){
  //           $scope.$apply(function(){
  //               $scope.curUser = data;
  //               $scope.main.toolbarRight = $scope.curUser.first_name +" "+ $scope.curUser.last_name;
  //           });
  //       });

 }]);

