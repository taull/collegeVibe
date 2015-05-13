import Ember from 'ember';

export default Ember.Controller.extend({

	typeUser: ["University or College", "Restaurant", "Hotel"],

	actions: {
		register: function () {
			var name = this.get('name');
			var email = this.get('email');
			var password = this.get('password');

			var users = Parse.Object.extend({
				className: 'user',

				initialize: function () {
					this.set({name:name});
					this.set({email:email});
					this.set({password:password});
				}
			});
			var newUser = new users().save();
			console.log(newUser);
	}
}

});
