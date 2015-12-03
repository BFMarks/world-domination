/**
 * ActivityController
 *
 * @description :: Server-side logic for managing activities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */





 	module.exports = {

		notifications: function (req, res) {
			var userId = req.param('id');

			Activity.find()
		 	 .where({receiver :{contains:userId}})
			 // .populate('receiver', {userId: 'receiver'})
			.exec(function (err, found) {
			
			sails.log("Searching for user's notifications: " + found);
	         
          if (err) return res.status(err).json(400);
        	 res.json(200, {found});
        
    	});
	}
};




