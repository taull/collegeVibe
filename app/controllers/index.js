import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentUser:Parse.User.current(),

	actions: {

		searchDropdown: function(){
			Ember.$('.search-input').focus(function(){
		    	Ember.$('.college-search').toggleClass('hidden');
				});
		},

    logout:function () {
      Parse.User.logOut();
    }
  }
});
