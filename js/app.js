"use strict";

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var app = angular.module('BFUnitApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
    	templateUrl: !isMobile.any() ? './views/desktop.html' : './views/mobile.html'
    });
}]);

app.controller('BFUnitCtrl', function($scope, $http) {
	$http.get("./data/data.json").success(function(response) {
		$scope.next = response.next;
		$scope.groups = response.groups;
		$scope.next6eu = response.next6eu;
		$scope.global7 = response.global7;
		$scope.unranked = response.unranked;
		
		$scope.filterGroups = function(obj, idx) { return !((obj._index = idx) % 2); }
	});
});