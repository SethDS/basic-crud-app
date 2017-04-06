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
        console.log(req.headers.watch_id);
        console.log('Deleting watch number ' + req.headers.watch_id + '...');
        db.delete_watch([
            req.headers.watch_id
        ], function(err, results){
            if(err){
                console.error(err);
                return res.status(400).send('Houston, we have a problem...');
            }
            return res.status(200).send(results);
        })
    },  //end of delete watch function

    changeWatchInfo: function(req, res, next){
        console.log('Changing watch info for watch number ' + req.body.id + '...');

        db.edit_watch([
            req.body.id,
            req.body.info
        ], function(err, results){
            if(err){
                console.error(err);
                return res.status(400).send('Houston, we have a problem...')
            }
            return res.status(200).send('Watch info has been successfully changed.')
        })
    }

};