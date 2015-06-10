import Ember from 'ember';

export default Ember.ArrayController.extend({
  currentUser:Parse.User.current(),

	actions: {

		searchDropdown: function(q,e){
			var self = this;
			var queryString = q.toLowerCase(),
				event = e;
			if (e.keyCode != 16) { //excludes the shift key, might not be necessary
				var dataArray = self.model;
				var qLength = q.length

				//Define the filter callback
				function filterFunction (i) {
					return i.get('Name').slice(0,qLength).toLowerCase() == queryString ? true : false;
				}
				//filter through the data provided 
				var matchedQuery = dataArray.filter(filterFunction);
				//matchedQuery now has the array of matching objects

				//clear the search options
				$('.college-search').empty();

				//append the new search options
				if (qLength != '') {
					matchedQuery.forEach(
						function (i) {
							var newDiv = document.createElement('div');
							newDiv.style.color = 'white';
							newDiv.textContent = i.get('Name');
							$('.college-search').append(newDiv);
					});
				}
			}
		},

    logout:function () {
      Parse.User.logOut();
    }
  }
});
