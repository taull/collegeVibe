import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');

  this.route('business', function() {
    this.route('education');
  });

  this.route('colleges', function() {
    this.route('profile');
    this.route('my-profile');
    this.route('gallery');
    this.route('restaurants');
    this.route('hotels');
    this.route('sports');
    this.route('breaks');
  });
  this.route('login');
  this.route('contact');
  this.route('gallery');
});

export default Router;
