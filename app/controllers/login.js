import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    login: function () {
      var email = this.get('email');
      var password = this.get('password');
      Parse.User.logIn(email, password,
      {success:function (data) {
        //Success! Go do things now
      }, error:function (user, error) {
        //Error, tell them what happened
        alert(error.message);
      }})
    },
  }

});
