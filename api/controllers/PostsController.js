/**
 * PostsController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {



     profileways: function (req, res) {
      var userId = req.param('id');
      sails.log("Searching for user's friends: " + userId);

   
    Posts.find({
       	or : [
       {'joins.userId': userId},
       { user: userId },     
       ]
   	})  
          .populateAll()
          .exec(function (err, found) {
        	// sails.log("found " + found);
          if (err) return res.status(err).json(400);
         res.json(200, {found});
      
       });
     }
};





