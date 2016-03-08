var countryApp = angular.module('CinemaSite', ['ngRoute']);
console.log("here");
countryApp.controller('CountryCtrl', function ($scope, $http) {
  console.log("1");
$http.get('countries.json').success(function(data) {
console.log("2");
$scope.countries = data;
  });
});
