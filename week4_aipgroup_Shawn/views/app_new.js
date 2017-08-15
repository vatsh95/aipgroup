(function(){
var app=angular.module('movieRecommendation',[]);
    var movies=[
        {
            name:'Good Will Hunting2',
            releaseDay:'14/08/2015',
            Duration:'85 mins',
            Genre:'Comedy',
            Synopsis:'sdfasdfasdfsadfasdfsadfasdf',
        }
    ];
/*    app.config(['$qProvider', function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);
*/
    var dataId = '';

    app.controller('MovieController', function($scope, $http) {

        var app = this;

        $http.get('/api/movies')
            .then(function(response) {

                this.movies = response.data;
                $scope.mvName = this.movies[0].name;
                $scope.mvReleaseDay = this.movies[0].releaseDay;
                $scope.mvDuration = this.movies[0].Duration;
                $scope.mvGenre = this.movies[0].Genre;
                $scope.mvSynopsis = this.movies[0].Synopsis;
                app.dataId = this.movies[0]._id;
            });

        $scope.addMovie = function(newMovie) {

            var data = {
//                id: app.dataId,
                name: $scope.newMovieName,
                releaseDay : $scope.newMovieReleaseDay,
                Duration : $scope.newMovieDuration,
                Genre : $scope.newMovieGenre,
                Synopsis : $scope.newMovieSynopsis
            }

            var url = '/api/updates/'+app.dataId;

            $http({
                url: url, // No need of IP address
                method: 'POST',
                data: data,
                headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                window.location.reload();

            })
                .catch(function (err) {});
        };
    });

})();
