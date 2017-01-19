var myApp = angular.module("myApp", ['ngRoute'])

myApp.config(["$routeProvider","$locationProvider", function($routeProvider, $locationProvider){

    $locationProvider.hashPrefix('');

    $routeProvider
        .when("/home", {
          controller: "HomeController",
          templateUrl: "pages/home.html",
          caseInsensitiveMatch: true
        })
        .when("/about", {
          controller: "AboutController",
          templateUrl: "pages/about.html",
          caseInsensitiveMatch: false
        })
        .when("/contact",{
          controller: "ContactController",
          templateUrl: "pages/contact.html",
          caseInsensitiveMatch: true
        })
        .otherwise("/home")
}])

myApp.controller("HomeController", ["$scope", function($scope){
    $scope.message = " This is Home page, Guys!!!"
    var person1={
      name:"abc",
      city:"nuz"
    }
    var person2={
      name:"zpq",
      city:"kovvr"
    }
    var person3={
      name:"xyz",
      city:"kovvr"
    }
    $scope.contacts=[person1,person2,person3];
}])

myApp.controller("AboutController", ["$scope", function($scope){
    $scope.message = " This is About page"
}])

myApp.controller("ContactController", ["$scope", function($scope){
    $scope.message = " This is Contact page"
}])
