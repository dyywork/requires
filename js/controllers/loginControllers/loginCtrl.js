define(function () {
  'use strict';

  function ctrl($scope,$state,httpServices,$ionicPopup) {
    $scope.isChecked = true;
    var info = JSON.parse(window.localStorage.getItem('userinfo'));
    if (info && info.password != undefined) {
      $scope.mobile = info.username;
      $scope.input = {password: info.password};
    } else {
      $scope.input = {password: ""};
    }
    $scope.$watch('input.password', function (newValue, oldValue) {
      if ($scope.input.password != oldValue) {
        //当value改变时执行的代码
      }
    });
    $scope.isOk = {eye: true, noeye: false}
    $scope.eyePass = function (data) { //显示密码明文的点击
      if (data === 0) {
        $scope.isOk = {eye: false, noeye: true}
      } else {
        $scope.isOk = {eye: true, noeye: false}
      }
    }

    $scope.loginBtn = function (mobile, password, isChecked) {
      $scope.mobile = mobile;
      if (!mobile) {
        //Popup.alert('请输入手机号');
      } else if (!password) {
        //Popup.alert('密码不能为空');
      } else {
        httpServices.getlist('api/login?userCode=' + mobile + '&password=' + password, 'POST').then(function (data) {
          if (data.code === 0) {
            if (isChecked) {
              window.localStorage.setItem("userinfo", JSON.stringify({
                token: data.token,
                username: mobile,
                password: password
              }))
            } else {
              window.localStorage.setItem("userinfo", JSON.stringify({
                token: data.token
              }))
            }
            $state.go('tab.dash')
          } else if (data.code === 500) {
            //Popup.alert(data.msg);
          } else if (data.code === 502) {
            console.log(222)
            $scope.datas = {name: "", names: "", oldName: ""};
            var myPopups = $ionicPopup.show({
              template: '<input class="dyy-input-border" style="padding-left: 6px;" type="text" ng-model="datas.oldName" placeholder="输入旧密码">' +
              '<input class="dyy-input-border dyy-margin-top" style="padding-left: 6px;" type="text" ng-model="datas.name" placeholder="输入新密码">' +
              '<input class="dyy-input-border dyy-margin-top" type="text" style="padding-left: 6px;" ng-model="datas.names" placeholder="再次输入新密码">' +
              '<span class="dyy-font1">密码只能输入字母、数字、长度 6-16 位，必须包括字母、数字、密码不能包含用户名信息</span>',
              title: '<span class="dyy-font12">修改密码</span>',
              scope: $scope,
              buttons: [
                {
                  text: '<b>保存</b>',
                  type: 'button-positive dyy-border-rad',
                  onTap: function (e) {
                    console.log(e)
                    $scope.datas.events = e;
                    var res = $scope.datas
                    var testOne = /.*[a-zA-Z]+.*/;
                    if (res.name === res.names) {
                      if (testOne.test(res.names) && res.names.indexOf($scope.input.password) < 0 && res.names.length > 6 && res.name.length < 16) {
                        return $scope.datas;
                      } else {
                        //Popup.alert('密码输入规则不正确');
                        e.preventDefault()
                      }
                    } else {
                      //Popup.alert('两次输入密码不一致')
                      e.preventDefault()
                    }

                  }
                }
              ]
            });
            myPopups.then(function (res) {

              httpServices.getlist('api/repwd?userCode=' + $scope.mobile + '&oldPwd=' + res.oldName + '&newPwd=' + res.names, "POST").then(function (data) {
                if (data.code === 0) {
                  window.localStorage.setItem("userinfo", JSON.stringify({
                    token: data.token,
                    username: mobile,
                    password: res.names
                  }))
                  $scope.input.password = res.names;
                  res.events.preventDefault()
                  layer.msg(data.msg, {time: 2000})
                } else {
                  res.events.preventDefault()
                  layer.msg(data.msg, {time: 2000})
                }
              })


            });

            $scope.$watch('datas.names', function (newValue, oldValue) {
              if ($scope.datas.name === newValue) {
                console.log("11")
              }
              /*if ($scope.input.buyNum < $scope.dataDetail.stageNum) {
               $scope.input.buyNum = $scope.dataDetail.stageNum;
               }*/
            });
          } else if (data.code === 503) {
           // Popup.alert('用户已被禁用');
          }
        }, function (err) {

        })
      }
    }
  }

  ctrl.$inject = ['$scope', '$state', 'httpServices', '$ionicPopup']

  return ctrl;
})
