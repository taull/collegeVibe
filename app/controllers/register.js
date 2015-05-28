import Ember from 'ember';

export default Ember.Controller.extend({

	typeUser: ["Student", "Prospective Student",  "Alumni", "Restaurant", "Hotel"],
	pickCollege: ["Auburn University", "Clemson University", "Duke University", "University of South Carolina"],

	actions: {
		register: function () {
			//Get the values from the text boxes
			var name = this.get('name');
			var email = this.get('email');
			var password = this.get('password');
			//Create the constructor for the user object
			var users = Parse.Object.extend({
				className: 'user',
				//Set the attributes on the instanced object
				initialize: function () {
					this.set({name:name});
					this.set({email:email});
				}
			});
			//Create an instance of the user-class object and save it to the server
			var newUser = new users().save();
			//Change to the index route once registered
			//(Might want to make this run after a successful callback)
			this.transitionToRoute('index');
	}
}

});
