var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://shawn:shawn@ds037252.mlab.com:37252/shawnkim', ['movie']);

//Get All tasks
router.get('/movies', function(req, res, next){
    console.log("search movie is called");
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
//    res.send('Task API');
    db.movie.find(function(err, movie){
        if(err){
            res.send(err);
        }
        res.json(movie);
    })
});

/*
//Update task
router.put('/movie/:id', function(req, res, next){
    console.log("update movie is called");
//    res.send('Task API');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    console.log("update movie is called2");
    var movie = req.body;
    var updMovie = {};

    if(movie.name){
        updMovie.name = movie.isDone;
    }
    if(movie.releaseDay){
        updMovie.releaseDay = movie.releaseDay;
    }

    if(!updMovie){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updMovie, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }

});
*/

router.post('/movies/update', function(req, res, next){
    console.log("update movie is called");
//    res.send('Task API');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    console.log("update movie is called2");
    var movie = req.body;
    var updMovie = {};

    if(movie.name){
        updMovie.name = movie.isDone;
    }
    if(movie.releaseDay){
        updMovie.releaseDay = movie.releaseDay;
    }

    if(!updMovie){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.movie.update({_id: mongojs.ObjectId(req.params.id)},updMovie, {}, function(err, movie){
            if(err){
                res.send(err);
            }
            res.json(movie);
        })
    }

});

module.exports = router;