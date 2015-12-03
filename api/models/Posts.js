 /**
* Posts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  		description: 'string',
  		target_date: 'date',
  		target_location: 'string',
  		privacy: 'string',
    
      invitedFriends: {
      type: 'json'
      },
    
    
  		user: {
  			model: 'user'
  		},

      comments: {
      collection: 'comments',
      via: 'posts'
       },

       likes: {
      collection: 'likes',
      via: 'posts'
       },

       joins: {
      collection: 'joins',
      via: 'posts'
       },

    }
};

