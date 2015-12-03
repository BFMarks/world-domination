
/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: function (req, res) {
    var facebookId = req.param('facebookId');
    var password = req.param('password');

    if (!facebookId || !password) {
      return res.json(401, {err: 'facebookId and password required'});
    }

    User.findOne({facebookId: facebookId}, function (err, user) {
      if (!user) {
        return res.json(401, {err: 'invalid facebookId or password'});
      }

      User.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(401, {err: 'invalid facebookId or password'});
        } else {
          res.json({
            user: user,
            token: jwToken.issue({id : user.id })
          });
        }
      });
    })
  }
};