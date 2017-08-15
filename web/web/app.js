(function() {
  var app = angular.module('store', []);
  var movies = [{
    name: 'People Places Things',
    releaseDay: '14/08/2015',
    Duration: '85 mins',
    Genre: 'Comedy',
    Synopsis: 'sdfasdfasdfsadfasdfsadfasdf',
  }];
  app.controller('StoreController', function($rootScope) {
    $rootScope.products = movies;
  });
  app.controller("MovieController", function($rootScope) {
    this.product = {};
    this.addMovie = function(product) {
      $rootScope.products.push(product);
      this.product = {};
    };
  });
})();