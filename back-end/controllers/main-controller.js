/**
 * Created by Seth on 4/5/2017.
 */
var app = require('../server');
var db = app.get('db');

module.exports = {
  addWatch: function(req, res, next){
      console.log(req.body);
      db.add_watch([
          req.body.watchMake,
          req.body.watchModel,
          req.body.watchDescription,
          req.body.watchImage
      ], function(err, results){
          if(err){
              console.error(err);
              return res.status(400).send('Houston, we have a problem...')
          }
          return res.status(200).send(results);
      })
  },  // end of addWatch function

    getWatches: function(req, res, next){
      console.log('Getting watches from db...'),
          db.get_watches([], function(err, results){
                if(err){
                    console.error(err);
                    return res.status(400).send('Houston, we have a problem...')
                }
                return res.status(200).send(results)
          })
    },  //end of getWatches function

    deleteWatch: function(req, res, next){
        console.log('Deleting watch number ' + req.body.watch_id + '...');
        db.delete_watch([
            req.body.watch_id
        ], function(err, results){
            if(err){
                console.error(err);
                return res.status(400).send('Houston, we have a problem...');
            }
            return res.status(200).send(results);
        })
    }

};