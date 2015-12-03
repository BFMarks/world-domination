/**
* Activity.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	actor: {
			type: 'json'
		},

	verb: {
			type: 'json'
		},

	seen:{
			 type: 'boolean',
			defaultsTo: 'false'
			 },

	receiver: {
			
			 type: 'string'
		},

	content: {
			type: 'json',	
			},

	objectId: 'string',

	postId :'string'

  }
};

