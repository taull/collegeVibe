import Ember from 'ember';

export default Ember.Controller.extend({

	typeUser: ["Student", "Prospective Student",  "Alumni", "Restaurant", "Hotel"],
	pickCollege: ["Auburn University", "Clemson University", "Duke University", "University of South Carolina"],

	actions: {
		register: function () {
			//Get the values from the form
			var username = this.get('username');
			var email = this.get('email');
			var password = this.get('password');
			var userType = this.get('userType');
			var college = this.get('college');

			Parse.User.signUp(username, password, {email:email, userType:userType, college:college},
					//callback for successful post of new user to the server
				 {success:function (data) {
					//code to run on success
					},
					error:function (user, error) {
						alert(error.message);
					}});
	}
}

});
