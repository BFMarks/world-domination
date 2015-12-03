/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 
   module.exports = {


      waysfeed: function (req, res) {
        var userId = req.param('id');
        sails.log("Searching for user's friends: " + userId);

        User.find({ userId: userId })
          .populate('friends')
          .populate('posts')
          .exec(function (err, found) {
          ////   Now we have a list of friends, we can find their posts 
               Posts.find({ userId: found.friends })
                .populateAll()
               .exec(function (err, ways) {
               
                 sails.log("Searching for waysfeed: " + found.friends);

                if (err) return res.status(err).json(400);
               res.json(200, {found});               
                 });
         });
    },


    //       waysfeed: function (req, res) {
    //     var userId = req.param('id');
    //     sails.log("Searching for user's friends: " + userId);

    //     User.find({ userId: userId })
    //       .populate('friends')
    //       .populate('posts')
    //       .exec(function (err, found) {
    //       ////   Now we have a list of friends, we can find their posts 
    //            Posts.find({
    //                   or : [
    //                  {'friends.posts': found},
    //                  // { user: userId },     
    //                  ]
    //               })  
    //             .populateAll()
    //            .exec(function (err, ways) {
               
    //              sails.log("Searching for waysfeed: " + found.friends);

    //             if (err) return res.status(err).json(400);
    //            res.json(200, {found});               
    //              });
    //      });
    // },



  create: function (req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.json(401, {err: 'Password doesn\'t match, What a shame!'});
    }
    User.create(req.body).exec(function (err, user) {
      if (err) {
        return res.json(err.status, {err: err});
      }
      // If user created successfuly we return user and token as response
      if (user) {
        // NOTE: payload is { id: user.id}
        res.json(200, {user: user, token: jwToken.issue({id: user.id})});
      }
    });
  },

};



