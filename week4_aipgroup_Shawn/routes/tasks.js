var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://shawn:shawn@ds037252.mlab.com:37252/shawnkim', ['tasks']);

//Get All tasks
router.get('/tasks', function(req, res, next){
//    res.send('Task API');
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    })
});

//Get Single tasks
router.get('/task/:id', function(req, res, next){
//    res.send('Task API');
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else{
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//Delete task
router.delete('/task/:id', function(req, res, next){
//    res.send('Task API');
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    })
});

//Update task
router.put('/task/:id', function(req, res, next){
//    res.send('Task API');

    var task = req.body;
    var updTask = {};

    if(task.isDOne){
        updTask.isDone = task.isDone;
    }
    if(task.title){
        updTask.title = task.title;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        })
    }

});

module.exports = router;