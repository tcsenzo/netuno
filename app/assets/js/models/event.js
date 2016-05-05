import configs from '../configs';

let model = Backbone.Model.extend({
  urlRoot: `${configs.apiUrl}/event`,
  idAttribute: 'id',

  initialize: function() {
    console.log('initialized');
  }

});

export default model;
