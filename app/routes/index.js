import Ember from 'ember';

export default Ember.Route.extend({

  afterModel: function () {
      console.log(this.controllerFor);
  },

  model: function () {
    var query = new Parse.Query("College");
    return query.find({
      success:function (results) {
        return results;
      },
      error:function (object, error) {
        alert(error);
      }
    });
  }



});
