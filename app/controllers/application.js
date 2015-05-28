import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		openSidebar: function(){
	        Ember.$('.home-sidebar').addClass('open-sidebar');

	        Ember.$('.home-sidebar-open').addClass('hidden');
	        Ember.$('.home-sidebar-close').removeClass('hidden');
	    },

    closeSidebar: function(){
        Ember.$('.home-sidebar').removeClass('open-sidebar');

        Ember.$('.home-sidebar-close').addClass('hidden');
        Ember.$('.home-sidebar-open').removeClass('hidden');
	    }
	}
});
