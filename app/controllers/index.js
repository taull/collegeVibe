import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		searchDropdown: function(){
			Ember.$('.search-input').focus(function(){
		    	Ember.$('.college-search').toggleClass('hidden');
				});
		}

	}
});
