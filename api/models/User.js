/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcryptjs')

// var User = 
module.exports = {

	schema: true,

	//User attributes
	attributes: {

		facebookId: {
			type: 'string',
			unique: true,
			notNull: true,
			required: true
		
		},
		facebookFriendIds: {
			type: 'json'
		},

		facebookAccessToken: 'string',
		location: 'string',
		email: 'string',
		first_name: 'string',
		last_name: 'string',
		full_name: 'string',

		about: {
			type: 'json'
		},

		friends : {
			 collection: 'user',
   		  	   via: 'id'
   		  	 // type: 'json'
		},


   		  friendRequests: {
   		  	 // collection: 'user',
   		  	 //    via: 'id',
   		  	 type: 'json'
		},

		posts: {
			collection: 'posts',
			via: 'user'
		},

 		profilePicture: 'string',

 		profilePictureThumbnail: 'string',

		// groups: {
		// 	collection: 'group'
		// }

		notifCount :{
			type: 'integer'
		},

		friendReqCount :{
			type: 'integer'
		},

		 encryptedPassword: {
      type: 'string'
    },
    // We don't wan't to send back encrypted password either
    toJSON: function () {
      var obj = this.toObject();
      delete obj.encryptedPassword;
      return obj;
    }
  },
  // Here we encrypt password before creating a User
  beforeCreate : function (values, next) {
    bcrypt.genSalt(10, function (err, salt) {
      if(err) return next(err);
      bcrypt.hash(values.password, salt, function (err, hash) {
        if(err) return next(err);
        values.encryptedPassword = hash;
        next();
      })
    })
  },

  comparePassword : function (password, user, cb) {
    bcrypt.compare(password, user.encryptedPassword, function (err, match) {

      if(err) cb(err);
      if(match) {
        cb(null, true);
      } else {
        cb(err);
      }
    })
  }
};