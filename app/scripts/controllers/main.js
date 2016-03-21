'use strict';

angular.module('smtpFrontendApp').controller('MainCtrl', function ($scope, utilsFactory) {
    utilsFactory.getRequest('http://localhost:2000/api/get_all').then(function(data) {
        $scope.emails = data;
    });

    $scope.loadEmail = function () {
        utilsFactory.getRequest().then(function (data) {
            $scope.email = data;
        });
    };
});
