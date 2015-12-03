/**
* Comments.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

         posts: {
             model: 'posts'
         },
         userId: 'string',
         comment: 'string',
         first_name: 'string',
         full_name: 'string',
         profilePictureThumbnail: 'string',
 }
};

