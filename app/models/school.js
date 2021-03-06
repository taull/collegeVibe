import DS from 'ember-data';

export default DS.Model.extend({
  schoolName: DS.attr('string'),
  address: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  dateEstablished: DS.attr('string'),
  website: DS.attr('string'),
  facebook: DS.attr('string'),
  twitter: DS.attr('string'),
  pinterest: DS.attr('string'),
  instagram: DS.attr('string'),
  linkedIn: DS.attr('string'),
  writeUp: DS.attr('string'),
  region: DS.attr('string'),
  ugEnrollment: DS.attr('string'),
  gradEnrollment: DS.attr('string'),
  typeOfSchool: DS.attr('string'),
  popularMajor: DS.attr('string'),
  secondPopularMajor: DS.attr('string'),
  stfRatio: DS.attr('string'),
  acceptanceRate: DS.attr('string'),
  percentMale: DS.attr('string'),
  percentFemale: DS.attr('string'),
  inStateTuition: DS.attr('string'),
  outOfStateTuition: DS.attr('string'),
  collegeSetting: DS.attr('string'),
  similarSchools: DS.hasMany('school'),
  colorOne: DS.attr('string'),
  colorTwo: DS.attr('string')
});
