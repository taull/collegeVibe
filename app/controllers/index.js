import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser:Parse.User.current(),

  actions: {
    logout:function () {
      Parse.User.logOut();
    }
  }
});
