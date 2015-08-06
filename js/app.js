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
    	templateUrl: isMobile.any() ? './views/mobile.html' : './views/desktop.html',
		css: isMobile.any() ? ['bootstrap-3.3.5/css/bootstrap.min.css','./css/mobile.css'] : ['bootstrap-3.3.5/css/bootstrap.min.css','./css/desktop.css']
    }).when('/next', {
    	templateUrl: isMobile.any() ? './views/mnext.html' : './views/dnext.html',
    	css: isMobile.any() ? ['bootstrap-3.3.5/css/bootstrap.min.css','./css/mobile.css'] : ['bootstrap-3.3.5/css/bootstrap.min.css','./css/desktop.css']
    }).when('/unit', {
    	templateUrl: isMobile.any() ? './views/munit.html' : './views/dunit.html',
    	css: isMobile.any() ? ['bootstrap-3.3.5/css/bootstrap.min.css','./css/mobile.css'] : ['bootstrap-3.3.5/css/bootstrap.min.css','./css/desktop.css']
    }).when('/team', {
    	templateUrl: isMobile.any() ? './views/mteam.html' : './views/dteam.html',
    	css: isMobile.any() ? ['bootstrap-3.3.5/css/bootstrap.min.css','./css/mobile.css'] : ['bootstrap-3.3.5/css/bootstrap.min.css','./css/desktop.css']
    });
}]);

app.controller('BFUnitMainCtrl', function($scope, $route) {
	$scope.$watch(function() { return $route.current.css; }, function(value) {
	    $scope.css = value;
		
		$scope.selectedTab = 'home';
		$scope.menuOpen = 'false';
		$scope.changeTab = function(tab){
			$scope.selectedTab = tab;
			$scope.menuOpen = 'false';
		}
		$scope.openCloseMenu = function(){
			$scope.menuOpen = ($scope.menuOpen == 'true') ? 'false' : 'true';
		}
	});
});

app.controller('BFUnitMobileCtrl', function($scope, $http) {
	$http.get("./data/next.json").success(function(response) {
		$scope.next = response.next;
		$scope.next6eu = response.next6eu;
		$scope.global6 = response.global6;
		$scope.global7 = response.global7;
	});
	$http.get("./data/team.json").success(function(response) {
		$scope.team = response.team;
	});
	$http.get("./data/unit.json").success(function(response) {
		$scope.groups = response.groups;
		$scope.unranked = response.unranked;
	});
});

app.controller('BFUnitDesktopCtrl', function($scope, $http) {
	$http.get("./data/next.json").success(function(response) {
		$scope.next = response.next;
		$scope.next6eu = response.next6eu;
		$scope.global6 = response.global6;
		$scope.global7 = response.global7;
	});
	$http.get("./data/team.json").success(function(response) {
		$scope.team = response.team;
	});
	$http.get("./data/unit.json").success(function(response) {
		$scope.groups = response.groups;
		$scope.unranked = response.unranked;
	});
		
	$scope.filterGroups2 = function(obj, idx) { return !((obj._index = idx) % 2); }
	$scope.filterGroups3 = function(obj, idx) { return !((obj._index = idx) % 3); }
});