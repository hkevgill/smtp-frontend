'use strict';

angular.module('smtpFrontendApp').factory('utilsFactory', function($http, $q) {
    var factory = {};

    factory.getRequest = function(url) {
        var deferred = $q.defer();

        $http.get(url).success(function(data) {
            deferred.resolve(data);
        }).error(function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };

    return factory;
});
