/**
* Group.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	 identity: 'group',
  	 facebookId: 'string',
  		user: {
  			model: 'user',
  			// collection: 'facebookId'
  		}
      // name: {
      //    type: 'string',
      //    // unique: true,
      //    // required: true
      // },
      // access_level: 'integer',

	//Tried Via Code Here      
  //    	group: {
  // 			model: 'user',
  // 			collection: 'user'
  // 		},
		// // model: 'user',
	 // 	type: 'json',
	 // 	collection: 'user'
		
  }
};
