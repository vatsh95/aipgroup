(function(){
var app=angular.module('store',[]);
var movies=[
	{
		name:'People Places Things',
		releaseDay:'14/08/2015',
		Duration:'85 mins',
		Genre:'Comedy',
		Synopsis:'sdfasdfasdfsadfasdfsadfasdf',
	}
];
	app.controller('StoreController', function(){
		this.products=movies;
	});
	app.controller("MovieController", function(){
		this.product ={};
		
		this.addMovie = function(){
			this.products[0].name = this.product.name;
//			movies = {};
			movies.push(this.product);
			this.product={};
		};
	});
})();
